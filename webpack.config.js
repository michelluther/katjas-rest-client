const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'client'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.hbs$/,
            loader: "handlebars-loader"
        }]
    }
};