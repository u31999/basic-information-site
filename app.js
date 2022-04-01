const express = require('express')
const app = express()
const path = require('path')
const PORT = 8080

const middlewareHomeRespond = (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
    
}

app.get('/', middlewareHomeRespond)
app.get('/home', middlewareHomeRespond)
app.get('/about', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'about.html'))
})
app.get('/contactMe', (req, res) => {

    res.status(200).sendFile(path.join(__dirname, 'contactMe.html'))
})
app.listen(PORT, (req, res) => {
    console.log(`Listen in Port ${PORT}`)
})

