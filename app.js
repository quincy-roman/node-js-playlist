import express from 'express'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// * This is what makes this an Express app.
const app = express()
app.set('view engine', 'ejs')

const directory = dirname(fileURLToPath(import.meta.url))

// Easily make HTTP requests using the app you made above.
app.get('/', (req, res) => {
    res.sendFile(`${directory}/index.html`)
})

app.get('/contact', (req, res) => {
    res.sendFile(`${directory}/contact.html`)
})

// * To grab a URL parameter, use the request object. You use the params object, then the field.
app.get('/profile/:id', (req, res) => {
    res.send(`You requested to see a profile with the id of ${req.params.id}`)
})

app.listen(3000)