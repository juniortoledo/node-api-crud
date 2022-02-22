import { Sequelize } from 'sequelize'
import db from '../config/database.js'

// init datatypes
const { DataTypes } = Sequelize

// define schema
const Product = db.define('products', {
  // define attributes
  title: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DOUBLE
  }
}, {
    // freeze table name
    freezeTableName: true
  })

// export model product
export default Product