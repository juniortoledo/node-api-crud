import Product from '../models/Product.js'

// get all products
export const getProducts = async (req, res) => {
  try {
    const product = await Product.findAll()
    res.send(product)
  } catch (err) {
    console.log(err)
  }
}

// get product by id
export const getProductsById = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id
      }
    })
    res.send(product[0])
  } catch (err) {
    console.log(err)
  }
}

// create a new product
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.json({
      'message': 'Product created'
    })
  } catch (err) {
    coonsole.log(err)
  }
}

// update product by id
export const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json({
      'message': 'Product Updated'
    })
  } catch (err) {
    console.log(err)
  }
}

// delete product by id
export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json({
      'message': 'Product deleted'
    })
  } catch (err) {
    console.log(err)
  }
}