const { Router, query } = require('express');
const { ProductsController } = require('../controller/productos')
const router = Router();



router.get('/', (req, res) => {
    res.json({
        msg: ProductsController.getAll()
    })
})

router.get('/:id', async (req, res) => {

    const id = req.params.id;

    const product = await ProductsController.getById(id)
    res.json({
        msg: product
    })

})

router.post('/', async (req, res, next) => {
    const { body } = req
    try {
        const data = await ProductsController.save(body)
        res.json({
            msg: data
        })
    } catch (err) {
        next(err)

    }
});

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const { body } = req
    const data = await ProductsController.findByIdAndUpdate(id, body)
    res.json({
        msg: data
    })
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const data = await ProductsController.findByIdAndDelete(id)
    res.json({
        msg: data
    })
})

module.exports = router;