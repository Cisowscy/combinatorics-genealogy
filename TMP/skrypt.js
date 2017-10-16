inicjalizacja();

function inicjalizacja() {
   
    var Tablica = []
    for (var i = 2; i < 129; i++) {
        var tab = []
        tab.push(i);
        tab.push("");
        Tablica.push(tab);        
    }

}
function generuj() {
    var tabelka = document.createElement('table');
    var wiersz = {};
    var komorka = {};

    Tablica.forEach(function(wierszData) {
        wiersz = tabelka.insertRow(-1);
        wierszData.forEach(function(komorkaData) {
          komorka = wiersz.insertCell();
                komorka.textContent = komorkaData;
        });        
    });
    document.body.appendChild(tabelka);
}



