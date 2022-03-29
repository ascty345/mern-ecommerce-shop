import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Paginate = (props) => {
  const { pages, page, isAdmin = false, keyword = '' } = props

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((p) => (
          <LinkContainer
            key={p + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${p + 1}`
                  : `/page/${p + 1}`
                : `/admin/productList/${p + 1}`
            }>
            <Pagination.Item active={p + 1 === page}>{p + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginate
