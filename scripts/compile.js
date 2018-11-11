const handlebars = require('handlebars')
const fs = require('fs')
let output = ''

const template = fs.readFileSync(__dirname + '/../src/templates/main.hbs', {
    encoding: 'utf8'
})

console.log(template)
const compiled = handlebars.precompile(template)

output = compiled

output += fs.readFileSync(__dirname + '/../src/main.js', {
    encoding: 'utf8'
})

fs.writeFileSync(__dirname + '/../client/main.js', output);