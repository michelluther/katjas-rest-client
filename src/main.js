const page = require('./templates/main.hbs')



document.getElementById('service_caller').addEventListener('click', function (event) {
    var fastaQuery = document.getElementById('fastQueryInput').value; //
    var word_size = document.getElementById('word_size_input').value;
    var data = new FormData();
    data.append('sequence', fastaQuery);
    data.append('options', '-word_size='+word_size);


    if (fastaQuery != '') {
        var apiRequest = new XMLHttpRequest();
        apiRequest.open('GET', '/api/sequence/sequence' );
        apiRequest.onreadystatechange = function () {
            if (apiRequest.readyState === 4) {
                let hits = JSON.parse(apiRequest.responseText);
                document.getElementById('output_table').innerHTML = page({
                    hits: hits
                })
            }
        }
        apiRequest.send(data)
    }
})