import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import {
  listProduct,
  deleteProduct,
  createProduct,
} from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'

const ProductListScreen = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const pageNumber = params.pageNumber

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  const productDelete = useSelector((state) => state.productDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete

  const productCreate = useSelector((state) => state.productCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })

    if (!userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/product/${createdProduct._id}/edit`)
    } else {
      dispatch(listProduct('', pageNumber))
    }
  }, [
    dispatch,
    userInfo,
    navigate,
    successDelete,
    createdProduct,
    successCreate,
    pageNumber,
  ])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteProduct(id))
    }
  }

  const createProductHandler = () => {
    dispatch(createProduct())
  }

  return (
    <>
      <Row>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='d-flex justify-content-end'>
          <Button className='my-3' onClick={createProductHandler}>
            <i className='fas fa-plus' />
            Create Product
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <Button
                      as={Link}
                      to={`/admin/product/${product._id}/edit`}
                      className='btn-sm'
                      variant='light'>
                      <i className='fas fa-edit' />
                    </Button>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={deleteHandler.bind(null, product._id)}>
                      <i className='fas fa-trash' />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </>
  )
}

export default ProductListScreen
