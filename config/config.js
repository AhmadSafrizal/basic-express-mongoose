const mongoose = require('mongoose')
require('dotenv').config()

const mongodb = mongoose.connect(process.env.MONGOOSE_URI)

module.exports = mongodb