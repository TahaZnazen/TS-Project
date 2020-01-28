const express = require('express')
const morgan = require ('morgan')
const cors = require('cors')
const app = express()

const userRouter = require('./routes/userRouter')


app.use(morgan('dev'))
app.use(express.json())
app.use(cors())



//ROUTES

app.use('/api/v1/users',userRouter)

module.exports = app