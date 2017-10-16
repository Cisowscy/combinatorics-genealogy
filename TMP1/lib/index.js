
inicjalizacja();

function inicjalizacja() {
    var wartosci_IN = document.getElementsByClassName("wartoscIN");
    var wartosci_OUT = document.getElementsByClassName("wartoscOUT");
    for (var x = 0; x < wartosci_IN.length; x++) {
        var wartosc = wartosci_IN[x].value;
        if (wartosc == -1) {
            wartosci_OUT[x].innerHTML = "dupa";
        } else {
            wartosci_OUT[x].innerHTML = wartosc;
        }

    }

}