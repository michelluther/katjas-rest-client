const page = require('./templates/main.hbs')

function formatParams(params) {
    return "?" + Object
        .keys(params)
        .map(function (key) {
            return key + "=" + encodeURIComponent(params[key])
        })
        .join("&")
}

document.getElementById('service_caller').addEventListener('click', function (event) {
    var fastaQuery = document.getElementById('fastQueryInput').value; //
    var word_size = document.getElementById('word_size_input').value;
    var data = { sequence: fastaQuery, word_size: word_size };
    if (fastaQuery != '') {
        var apiRequest = new XMLHttpRequest();
        apiRequest.open('GET', '/api/sequence/sequence' + formatParams(data));
        apiRequest.onreadystatechange = function () {
            if (apiRequest.readyState === 4) {
                let hits = JSON.parse(apiRequest.responseText);
                document.getElementById('output_table').innerHTML = page({
                    hits: hits
                })
            }
        }
        apiRequest.send()
    }
})