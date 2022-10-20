const { Router } = require('express');
const { ProductsController } = require('../controller/productos')
const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg: ProductsController.getAll()
    })
})

router.get('/:id', (req, res) => {
    try {
        const id = req.params.id;

        const product = ProductsController.getById(id)
        res.json({
            msg: product
        })
    } catch (err) {
        const status = err.status || 500
        const message = err.message || 500

        res.status(status).json({
            message
        })
    }
})

router.post('/', (req, res) => {
    res.json({
        msg: ProductsController.save()
    })
})

router.put('/:id', (req, res) => {
    res.json({
        msg: ProductsController.findByIdAndUpdate()
    })
})

router.delete('/:id', (req, res) => {
    res.json({
        msg: ProductsController.findByIdAndDelete()
    })
})

module.exports = router;