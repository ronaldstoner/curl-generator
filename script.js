window.onload = function() {
    document.getElementById('protocol').addEventListener('input', generateCurlCommand);
    document.getElementById('method').addEventListener('input', generateCurlCommand);
    document.getElementById('url').addEventListener('input', generateCurlCommand);
    document.getElementById('token').addEventListener('input', generateCurlCommand);
    document.getElementById('contentType').addEventListener('input', generateCurlCommand);
    document.getElementById('headers').addEventListener('input', generateCurlCommand);
    document.getElementById('json').addEventListener('input', generateCurlCommand);
}

function generateCurlCommand() {
    var protocol = document.getElementById('protocol').value;
    var method = document.getElementById('method').value;
    var url = document.getElementById('url').value;
    var token = document.getElementById('token').value;
    var contentType = document.getElementById('contentType').value;
    var headers = document.getElementById('headers').value;
    var json = document.getElementById('json').value;

    var curlCommand = "curl -X " + method + " ";

    // Add protocol
    curlCommand += protocol + "://";

    // Add URL
    curlCommand += url + " ";

    // Add authorization token
    if (token != '') {
        curlCommand += "-H 'Authorization: Bearer " + token + "' ";
    }

    // Add Content-Type header
    if (contentType != '') {
        curlCommand += "-H 'Content-Type: " + contentType + "' ";
    }

    // Add headers
    var headersArray = headers.split(',');
    for (var i = 0; i < headersArray.length; i++) {
        curlCommand += "-H '" + headersArray[i] + "' ";
    }

    // Add JSON payload
    if (json != '') {
        curlCommand += "-d '" + json + "' ";
    }

    document.getElementById('curlCommand').innerText = curlCommand;
}