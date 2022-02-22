import { Sequelize } from 'sequelize'

// create connection
const db = new Sequelize('api_v1', 'admin', '123', {
  host: 'localhost',
  dialect: 'mysql'
})

// export connection
export default db