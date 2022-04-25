# MERN ECOMMERCE SHOP

In this project, I built a fully functional Ecommerce website, which contains several features such as authentication, upload pictures, 
admin managament, pagination, PayPal API for handling payment. The website is built from the inside out using MERN stack technology.

**Technology**: *React, Redux, NodeJs, CSS, HTML, JavaScript.*

## Quick Start 🦜
Add a .env file in root folder with the following without <> tags

      NODE_ENV = development
      PORT = 5000
      MONGO_URI = <your_mongoDB_Atlas_uri_with_credentials>
      JWT_SECRET = <your_JWT_secret>
      PAYPAL_CLIENT_ID = <your_PayPal_client_ID>
    

### Install server dependencies
    npm install

### Install frontend dependencies
    cd frontend
    npm install
    
### Run both Express & React from root
    npm run dev

Now you can check the site on http://localhost:3000/
___

### Build for production 🚒🚒🚒
Running a build in the frontend

    cd frontend
    npm run build

In .env file change 

      NODE_ENV = production
      
### Test production before deploy
After running a build in the frontend 👆, cd into the root of the project.
And run...

Linux/Unix

    node server.js

Windows Cmd Prompt or Powershell

    node server.js
    
Check in browser on http://localhost:5000/

### Screenshots
![screen-shot-1](https://user-images.githubusercontent.com/71373378/160825484-40185480-bb90-414d-a664-08abb3fb9e52.png)
![screen-shot-2](https://user-images.githubusercontent.com/71373378/160825489-a3a5254d-155e-458a-999e-cedc03920d2a.png)
![screen-shot-3](https://user-images.githubusercontent.com/71373378/160825490-fc41817d-10e9-4865-a232-cf84dbf32488.png)
![screen-shot-4](https://user-images.githubusercontent.com/71373378/160825492-3c5f4aa8-8ef5-4d9c-b94b-df31f9c2583d.png)
![screen-shot-5](https://user-images.githubusercontent.com/71373378/160825495-5908c408-d1b5-47b4-8c7a-7a2b6aa092ad.png)
