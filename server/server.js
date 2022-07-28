const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/BirdDB'

const app = express()
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection 

con.on('open', () => {
    console.log('connected....')
})  

app.use(cors())

app.use(express.json())

const alienRouter = require('./Routers/birds')
app.use('/birds', alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})