const express = require('express')
const app = express()
const Sequence = require('./api/sequence/sequence')
const port = 9000

app.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: __dirname
    })
})

app.get('/api/sequence/:sequence/resemblance', function (req, res) {
    const hits = new Sequence(req.param('sequence')).getHits()
    res.send(
        hits
    )
})

app.get('/client/main.js', (req, res) => {
    res.sendFile('client/main.js', {
        root: __dirname
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))