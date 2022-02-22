import express from 'express'
import cors from 'cors'
import db from './app/config/database.js'
import Router from './app/routes/routes.js'

// init express
const app = express()
app.use(express.json())
app.use(cors())

// testing database connection
try {
  await db.authenticate()
  console.log('Database connection successfully.')
} catch (err) {
  console.log(`Dabase connection error: ${err}.`)
}

app.use(Router)

app.listen(3000, () => console.log('Server running at https://localhost:3000'))