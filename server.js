const express = require('express')
const app = express()
const config = require("./package.json")
const Sequence = require('./api/sequence/sequence')
const port = 9001

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err);
});

app.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: __dirname
    })
})

app.get('/api/sequence/sequence', function (request, res) {
    let sequence = request.query.sequence;
    let options = { word_size: request.query.word_size };
    const dbPath = config.fasta.dbPath

    new Sequence(sequence, options).getHits(dbPath).then((hits) => {
        let returnArray = hits ? hits.map(hit => {
            return hit.data
        }) : [];
        res.send(returnArray)
    })

})

app.get('/client/main.js', (req, res) => {
    res.sendFile('client/main.js', {
        root: __dirname
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}! dwrewr`))