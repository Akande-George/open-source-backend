const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const db = require('./database/connection')

dotEnv.config()
const app = express()

// db connection
db();

const myMiddleware = (req, res, next) => {
    console.log(`hello what's up, Fullstack engineer here`)
    next()
}

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const errorMiddleware = (err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send({
        message: err.message,
        body: {}
    })
}

app.use('/api/v1/product', require('./routes/productRoute'))
app.use('/api/v1/user', require('./routes/userRoute'))

app.get('/', myMiddleware, (req, res, next) => {
    res.send('Hello from Samuel Yemi and George')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})

app.use(errorMiddleware)