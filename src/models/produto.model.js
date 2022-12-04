const mongoose = require('mongoose')

const produtoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: false
    },
    quantidade: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Produto', produtoSchema)