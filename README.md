# MERN ECOMMERCE SHOP

In this project, I built a fully functional Ecommerce website, which contains several features such as authentication, upload pictures, 
admin managament, PayPal API for handling payment. The website is built from the inside out using MERN stack technology.

**Technology**: *React, Redux, NodeJs, CSS, HTML, JavaScript.*

## Quick Start 🦜
Add a .env file in root folder with the following

      NODE_ENV = development
      PORT = 5000
      MONGO_URI = <your_mongoDB_Atlas_uri_with_credentials>
      JWT_SECRET = abc123
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

### Build for production
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
