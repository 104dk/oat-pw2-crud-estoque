const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8888
const db = require('./src/utils/db')
const produtoRouter = require('./src/routes/produto.route')
const userRouter = require('./src/routes/users.route')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('estoque-api ta funfante')
})

app.use('/api/v1/produtos', produtoRouter)

app.use('/api/v1/users', userRouter)




app.use((error, req, res, next) => {
    console.log('ERRO', error) 
    res.status(500).json({errorMessage: error.message})
 })

app.listen(port, () => {
    console.log(`escutando porta ${port}`)
})