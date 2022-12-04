const mongoose = require('mongoose')

const mongodb = 'mongodb://localhost/estoque?authSource=admin'
mongoose.connect(mongodb, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    user: 'estoque',
    pass: '123456'
})

const db = mongoose.connection;
db.on("error", (err) => {
    console.error(`err: ${err}`)
})

db.on('connected', (err,res) => {
    console.log('Conectado no banco de dados.')
})