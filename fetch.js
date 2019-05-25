function fetch() {

    var https = require('https');

    var options = {
        'method': 'GET',
        'hostname': 'api.coincap.io',
        'path': '/v2/assets',
        'headers': {
        }
    };

    var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
    });

    req.end();

    var table = document.getElementById("currency");
    for (var i=0;i<chunks.length;i++) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0), cell2 = row.insertCell(1), cell3 = row.insertCell(2), cell4 = row.insertCell(3), cell5 = row.insertCell(4), cell6 = row.insertCell(5);
        cell1.innerHTML = chunks.name;
        cell2.innerHTML = chunks.symbol;
        cell3.innerHTML = chunks.priceUsd;
        cell4.innerHTML = chunks.supply;
        cell5.innerHTML = chunks.marketCapUsd;
        cell6.innerHTML = chunks.volumeUsd24Hr;
    }
}