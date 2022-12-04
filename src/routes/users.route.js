const router = require('express').Router()
const controller = require('../controllers/users.controller')
const auth = require('../middlewares/auth')

router.post('/', controller.save)

router.get('/', auth, controller.getAll)

router.get('/:id', auth, controller.getById)

router.put('/:id', auth, controller.update)

router.delete('/:id', auth, controller.remove)

router.post('/authenticate', controller.authenticate)

module.exports = router