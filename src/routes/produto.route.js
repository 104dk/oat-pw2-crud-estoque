const router = require('express').Router()
const controller = require('../controllers/produto.controller')
const auth = require('../middlewares/auth')


router.post('/', auth, controller.salvar)

router.get('/', auth, controller.obterTudo)

router.get('/:id', auth, controller.obterPorId)

router.put('/:id', auth, controller.atualizar)

router.delete('/:id', auth, controller.remove)

module.exports = router