// source:
//https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

app.post('/create', db.createUser)

app.get('/:userid', db.readUser)

app.put('/:userid', db.updateUser)

app.delete('/:userid', db.deleteUser)

app.get('/', db.listOFUsers)

