const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000
const routes = require('../Backend/routes')



app.use(cors())
app.use(express.json());
require("./db")

app.use('/api',routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))