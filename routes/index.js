const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.get('/test', (req, res) => {
  res.send('Test')
})

router.get('/', ProductController.getAllProoducts)
router.get('/:id', ProductController.getProoductById)

module.exports = router