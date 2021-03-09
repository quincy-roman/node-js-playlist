import http from 'http'
import fs from  'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const directory = dirname(fileURLToPath(import.meta.url))

const server = http.createServer((req, res) => {
    console.log(`Request was made: ${req.url}`)
    
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(`${directory}/index.html`).pipe(res)
    }else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(`${directory}/contact.html`).pipe(res)
    }else if(req.url === '/api/characters'){
        let characters = [{name: "Kanade", age: 16}, {name: "Hori", age: 17}]
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(characters))
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        fs.createReadStream(`${directory}/404.html`).pipe(res)
    }
})

// Listen to port 3000 on the local IP.
server.listen(3000, '127.0.0.1')
console.log('Listening to port 3000...')