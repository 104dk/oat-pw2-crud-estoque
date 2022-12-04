const Produto = require('../models/produto.model')

const salvar = async (req,res,next) => {
    try {
        const data = req.body
        const novoProduto = new Produto(data)
        const produtoSalvo = await novoProduto.save()
        
       if(!produtoSalvo) {
            throw new Error("Produto nao pode ser salvo")
        }
        res.status(201).json({message: 'Novo produto criado'})
    } catch (err) {
        next(err)
    }
}

const obterTudo = async(req,res,next) => {
    try{
        const produtos = await Produto.find()
        res.status(200).json(produtos)
    } catch(err){
        next(err)
    }
}

const obterPorId = async(req,res,next) => {
    try{
        const id = req.params.id
        const produtos = await Produto.findById(id)

        if(!produtos){
            throw new Error(`Produto com id ${id} nao encontrado`)
        }
        res.status(200).json(produtos)

    } catch(err){
        next(err)
    }
}

const atualizar = async (req,res,next) => {
    try{
        const id = req.params.id
        const data = req.body

        const produtos = await Produto.findById(id)
        if(!produtos){
            throw new Error(`Produto com id ${id} nao encontrado`)
        }

        const produtoNovo = await Produto.findByIdAndUpdate(id,data, {new: true})
        res.status(200).json(produtoNovo)

    } catch(err){
        next(err)
    }
}

const remove = async (req,res,next) => {
    try{
        const id = req.params.id
        const produtos = await Produto.findById(id)
        if(!produtos){
            throw new Error(`Produto com id ${id} nao encontrado`)
        }

        await Produto.findByIdAndDelete(id)
        res.status(200).json({message: `Produto com id ${id} foi deletado`})
    } catch(err){
        next(err)
    }
}

module.exports = {
    salvar,
    obterTudo,
    obterPorId,
    atualizar,
    remove
}