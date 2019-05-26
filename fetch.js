function fetch() {

    var chunks = [];

    let xhr = new XMLHttpRequest;
    xhr.addEventListener('load',function(){
        let obj = JSON.parse(this.responseText);
        for (let i = 0; i < obj.data.length; i++) {
            let chunk = obj.data[i];
            chunks.push(chunk);
            
        let table = document.getElementById("currency");
        console.log(chunks[i]);
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0), cell2 = row.insertCell(1), cell3 = row.insertCell(2), cell4 = row.insertCell(3), cell5 = row.insertCell(4), cell6 = row.insertCell(5);
        cell1.innerHTML = chunks[i].name;
        cell2.innerHTML = chunks[i].symbol;
        cell3.innerHTML = chunks[i].priceUsd;
        cell4.innerHTML = chunks[i].supply;
        cell5.innerHTML = chunks[i].marketCapUsd;
        cell6.innerHTML = chunks[i].volumeUsd24Hr;
        }
    });

    xhr.open('GET', "https://api.coincap.io/v2/assets");
    xhr.send();

}