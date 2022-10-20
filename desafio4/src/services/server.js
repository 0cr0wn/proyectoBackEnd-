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
module.exports = app; 