const Product = require('../models/product')

class ProductController {
  static getAllProoducts = async (req, res, next) => {
    try {
      const products = await Product.find({})

      res.render('index', {products})
    } catch (err) {
      next(err)
    }
  }

  static getProoductById = async (req, res, next) => {
    try {
      const {id} = req.params

      const product = await Product.findById(id)

      res.render('show', {product})
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ProductController