const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const db = require('./db_config')

app.use(cors())
app.use(express.json())

const handlers = require('./handlers/handlers')

mongoose.connect("mongodb://localhost:27017/reas_exercise", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db.seedDB()



app.post("/add/property", handlers.post)


app.listen(3001, () => {
    console.log("Database is running at port 3001")
})








