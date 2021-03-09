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
app.get('/profile/:name', (req, res) => {
    let data = {age: 16, job: 'Student Council President', hobbies: ['Mapo Tofu', 'Maintaining order', 'Helping others']}
    res.render('profile', {person: req.params.name, data: data})
})

app.listen(3000)