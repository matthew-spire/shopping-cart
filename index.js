const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

// store contacts in an array
const contacts = []

app.get('/', (req, res) => {
  res.send("<h1>Routes: Try a GET request to /contacts and a POST request to /contact</h1>")
})

// list all contacts
app.get('/contacts', (req, res) => {
  res.json(contacts)
})

// add a contact
app.post('/contact', (req, res) => {
  contacts.push({ name: req.body.name, email: req.body.email })
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})