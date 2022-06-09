// console.log(__dirname, __filename)

// const _ = require('lodash')

// console.log(_.compact([12, 54, 0, false, "", 2154]))

const http = require('http')

const server = http.createServer(function (req, res) {
    // res.end('<h1>Hello</h1>')
    switch (req.url) {
        case "/":
            res.end('<h1>Hello</h1>')
            break;
        case "/fr":
            res.end('<h1>Bonjour</h1>')
            break;
        case "/es":
            res.end('<h1>Hola</h1>')
            break;
    
        default:
            res.end('<h1>Ouuuuuuuups</h1>')
            break;
    }
})

server.listen(8000, err => {
    err ? console.log(err) : console.log("the server is runing")
})

