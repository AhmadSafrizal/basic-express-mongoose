const express = require('express')
const app = express()
const path = require('path')
const router = require('./routes')
require('dotenv').config()

const port = process.env.PORT || 3000
const mongodb = require('./config/config')
const Product = require('./models/product')

// mongo db
if(mongodb) {
  console.log('connected to mongoose');
} else {
  console.log('cant connect to mongoose');
}

// view
app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

// route
app.use('/', router)

app.listen(port, () => {
  console.log(`Serve run on ${port}`);
})