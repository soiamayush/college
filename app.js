const express = require('express');
const cloudinary = require("cloudinary");
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDatabase = require("./config/database");

 connectDatabase();
const app = express();
app.use(cookieParser());
app.use(cors({
    "origin": "*", 
  "credentials": true,
}));
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const path = require('path')
const fileUpload = require('express-fileupload')
const errorMiddleware = require('./middlewares/error.js');

app.use(fileUpload())
app.use(express.json({limit: '50mb'}));

app.use(bodyParser.json({limit: '50mb'}));

app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
dotenv.config({ path: 'config/.env' })


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key:    process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

// Setting up config file 
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'config/.env' })

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


// Import all routes
const products = require('./routes/product');
const auth = require('./routes/auth');
const payment = require('./routes/payment');
const order = require('./routes/order');


app.use('/api/v1', products)
app.use('/api/v1', auth)
app.use('/api/v1', payment)
app.use('/api/v1', order)

if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, './frontend/dist')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './frontend/dist/index.html'))
    })
}


// Middleware to handle errors
app.use(errorMiddleware);


module.exports = app