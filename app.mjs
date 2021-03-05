import http from 'http'
import fs from  'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

// const directory = dirname(fileURLToPath(import.meta.url))

const server = http.createServer((req, res) => {
    console.log(`Request was made: ${req.url}`)
    // Set up the response with the HTTP status
    res.writeHead(200, {'Content-Type': 'application/json'})

    let myObj = {
        name: 'Kanade',
        job: 'Student Council',
        age: 16
    }
    res.end(JSON.stringify(myObj))
})

// Listen to port 3000 on the local IP.
server.listen(3000, '127.0.0.1')
console.log('Listening to port 3000...')