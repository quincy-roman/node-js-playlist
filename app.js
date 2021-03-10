import express from 'express'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import bodyParser from 'body-parser'

// * This is what makes this an Express app.
const app = express()
app.set('view engine', 'ejs')

// ? Match the route, then the directory.
app.use('/assets', express.static('assets'))    // * Express's way of serving static files.

const directory = dirname(fileURLToPath(import.meta.url))
const urlEncodedParser = bodyParser.urlencoded({ extended: false})  // ! Find better version

// Easily make HTTP requests using the app you made above.
app.get('/', (req, res) => {
    res.render(`index`)
})

app.get('/contact', (req, res) => {
    res.render(`contact`, {queryString: req.query}) // The query string has all the properties from the URL
})

// * To grab a URL parameter, use the request object. You use the params object, then the field.
app.get('/profile/:name', (req, res) => {
    let data = {age: 16, job: 'Student Council President', hobbies: ['Mapo Tofu', 'Maintaining order', 'Helping others']}
    res.render('profile', {person: req.params.name, data: data})
})

// * Making a POST request requires a middleware parser.
app.post('/contact', urlEncodedParser, (req, res) => {
    console.log(req.body)
    res.render('contact-success', {data: req.body})
})

app.listen(3000)