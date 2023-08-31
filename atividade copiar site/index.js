let localDate = getNewDate();

// localDate = "POCONÉ," + toString(getNewDate().ano) + "DE" + toString(getNewDate().mes) + "DE" + toString(getNewDate().ano)
document.getElementById("localData").innerHTML = localDate

function getNewDate() {
    let meses = [
        {name: "JANEIRO"},
        {name: "FEVEREIRO"},
        {name: "MARÇO"},
        {name: "ABRIL"},
        {name: "MAIO"},
        {name: "JUNHO"},
        {name: "JULHO"},
        {name: "AGOSTO"},
        {name: "SETEMBRO"},
        {name: "OUTUBRO"},
        {name: "NOVEMBRO"},
        {name: "DEZEMBRO"},
    ];

    ano = new Date().getFullYear();
    mes = new Date().getMonth();
    dia = new Date().getDay();
    // x = new Date()
    if (13 > mes > 0) {
        mes = meses[mes - 1];
    } else {
        mes = "indefinido";
    }

    return "POCONÉ, " + dia + " DE " + mes.name + " DE " + ano;
    // return x
}