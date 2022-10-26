const express = require('express')
const mainRouter = require('../routes/main');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', mainRouter)

app.get('/', (req, res) => {
    res.json({
        msg: "ok app"
    })
})

app.use((err, req, res, next) => {

    const status = err.status || 500
    const message = err.message || 'Internal Server Error'

    res.status(status).json({
        message,
        stack:
            err.stack
    })

})
module.exports = app; 