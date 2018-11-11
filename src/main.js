const page = require('./templates/main.hbs')



document.getElementById('service_caller').addEventListener('click', function (event) {
    var apiRequest = new XMLHttpRequest();
    apiRequest.open('GET', 'api/sequence/123.json');
    apiRequest.onreadystatechange = function () {
        if (apiRequest.readyState === 4) {
            let sequence = JSON.parse(apiRequest.responseText);
            document.getElementById('output_table').innerHTML = page({
                id: sequence.id,
                sequence: sequence.sequence,
                specimen: sequence.specimen
            })
        }
    }
    apiRequest.send()
})