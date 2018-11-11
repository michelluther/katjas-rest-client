const page = require('./templates/main.hbs')



document.getElementById('service_caller').addEventListener('click', function (event) {
    var apiRequest = new XMLHttpRequest();
    apiRequest.open('GET', 'api/sequence/sdfsdflkjfsdlfkj123/resemblance');
    apiRequest.onreadystatechange = function () {
        if (apiRequest.readyState === 4) {
            let hits = JSON.parse(apiRequest.responseText);
            document.getElementById('output_table').innerHTML = page({
                hits: hits
            })
        }
    }
    apiRequest.send()
})