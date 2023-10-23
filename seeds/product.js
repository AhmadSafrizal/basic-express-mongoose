const Product = require('../models/product')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGOOSE_URI)
  .then((result) => {
    console.log('connected to mongodb')
  }).catch((err) => {
    console.log(err)
  });

const seedProducts = [
  {
    "name": "Kemeja Flanel",
    "brand": "Hollister",
    "price": 750000,
    "color": "biru muda",
    "size": "M",
    // "category": "Baju",
  },
  {
    "name": "Celana Chino",
    "brand": "Levi's",
    "price": 900000,
    "color": "krem",
    "size": "S",
    // "category": "Celana",
  },
  {
    "name": "Sweater",
    "brand": "Gap",
    "price": 650000,
    "color": "merah muda",
    "size": "XL"
    // "category": "Jaket",
  },
  {
    "name": "Tas Ransel",
    "brand": "Herschel",
    "price": 1500000,
    "color": "biru",
    "size": "M",
    // "category": "Aksesoris",
  },
  {
    "name": "Kacamata Aviator",
    "brand": "Ray-Ban",
    "price": 2000000,
    "color": "emas",
    "size": "S",
    // "category": "Aksesoris",
  },
  {
    "name": "Baju Renang",
    "brand": "Speedo",
    "price": 500000,
    "color": "biru tua",
    "size": "XL",
    // "category": "Baju",
  },
  {
    "name": "Topi Baseball",
    "brand": "New Era",
    "price": 350000,
    "color": "hitam",
    "size": "L",
    // "category": "Aksesoris",
  },
  {
    "name": "Rompi",
    "brand": "Zara",
    "price": 850000,
    "color": "abu-abu",
    "size": "S",
    // "category": "Aksesoris",
  },
  {
    "name": "Jas",
    "brand": "Hugo Boss",
    "price": 4500000,
    "color": "hitam",
    "size": "XL",
    // "category": "Baju",
  },
]

Product.insertMany(seedProducts).then((result) => {
  console.log(result)
}).catch ((err) => {
  console.log(err)
})
