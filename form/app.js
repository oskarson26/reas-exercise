const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors())

app.use(express.static('public'));

const handlers = require('./handlers/handlers')

app.get('/formular', handlers.formular)


app.listen(3000, () => {
    console.log("Server for data input is started at port 3000")
})