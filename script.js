window.onload = function() {
    document.getElementById('protocol').addEventListener('change', generateCurlCommand);
    document.getElementById('url').addEventListener('input', generateCurlCommand);
    document.getElementById('headers').addEventListener('input', generateCurlCommand);
    document.getElementById('json').addEventListener('input', generateCurlCommand);
    document.getElementById('token').addEventListener('input', generateCurlCommand);
}

function generateCurlCommand() {
    var protocol = document.getElementById('protocol').value;
    var url = document.getElementById('url').value;
    var headers = document.getElementById('headers').value;
    var json = document.getElementById('json').value;
    var token = document.getElementById('token').value;

    var curlCommand = "curl -X GET ";

    // Add protocol
    curlCommand += protocol + "://";

    // Add URL
    curlCommand += url + " ";

    // Add headers
    var headersArray = headers.split(',');
    for (var i = 0; i < headersArray.length; i++) {
        curlCommand += "-H '" + headersArray[i] + "' ";
    }

    // Add JSON payload
    if (json != '') {
        curlCommand += "-d '" + json + "' ";
    }

    // Add authorization token
    if (token != '') {
        curlCommand += "-H 'Authorization: Bearer " + token + "' ";
    }

    document.getElementById('curlCommand').innerText = curlCommand;
}
