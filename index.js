const http = require('http');
const fs = require('fs');


const allFiles = fs.readdirSync('./')
    .filter((entry) => /.html/.test(entry));


const port = process.env.PORT || 8080
const servrt = http.createServer((req, res) => {
    let requestedUrl = req.url.slice(1)
    console.log(requestedUrl)
    let errMessage = '!opps no file found';
    if(requestedUrl === '') {
        req.url = '/home'
    }
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    if(req.url === '/home') {
        fs.readFile('./index.html', (err, data)=> {
            if(err) {
                res.writeHead(404);
                res.write(errMessage)
            }else {
                res.write(data)
            }
            res.end()
        })
    }else if(requestedUrl === 'about') {
        fs.readFile('./about.html', (err, data) => {
            if(err) {
                res.writeHead(404);
                res.write(errMessage);

            }else {
                res.write(data)
            }
            res.end()
        })
    }else if(requestedUrl === 'contact') {
        fs.readFile('./contact-me.html', (err, data) => {
            if(err) {
                res.writeHead(404)
                res.write(errMessage)
            }else {
                res.write(data)
            }
            res.end()
        })
    }else {
        fs.readFile('./404.html', (err, data)=> {
            if(err) {
                res.writeHead(404)
                res.write(errMessage)
            }else {
                res.write(data)
                
            }
            res.end()
        })
    }

   
})
servrt.listen(port, ()=> {
    console.log('wait for connection')
})

