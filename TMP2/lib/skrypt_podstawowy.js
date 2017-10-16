inicjalizacja();

function inicjalizacja() {
    zmianaWartosic()
}
function zmianaWartosic(){
    var wartosci_IN = document.getElementsByClassName("wartoscIN");
    var wartosci_OUT = document.getElementsByClassName("wartoscOUT");
    for (var x = 0; x < wartosci_IN.length; x++) {
        var wartosc = wartosci_IN[x].value;
        if (wartosc == -1 || wartosc == "") {
            wartosci_OUT[x].innerHTML = "—";
        } else {
            wartosci_OUT[x].innerHTML = wartosc;
        }
    }
}
function jakaWartosc(){
    zmianaWartosic();
}
function Ukryj1() {
    var Ukr1 = document.getElementById("Ukryj1");
    if (Ukr1.style.display === 'none') {
        Ukr1.style.display = 'block';
    } else {
        Ukr1.style.display = 'none';
    }
}
function increment_KW() {
    var wartosci_IN = document.getElementsByClassName("wartoscIN");
    if (wartosci_IN[0].value =="") {
        wartosci_IN[0].value = -1;
    } else if (wartosci_IN[0].value==8191) {
        wartosci_IN[0].value = -1;
    } else {
        wartosci_IN[0].value++;
    }
    zmianaWartosic();
}
function decrement_KW() {
    var wartosci_IN = document.getElementsByClassName("wartoscIN");
    if (wartosci_IN[0].value == "") {
        wartosci_IN[0].value = -1;
    } else if (wartosci_IN[0].value == -1) {
        wartosci_IN[0].value = 8191;
    } else {
        wartosci_IN[0].value--;
    }
    zmianaWartosic();
}
function list_KZ() {}

function increment_KB() {
    var wartosci_IN = document.getElementsByClassName("wartoscIN");
    if (wartosci_IN[1].value == "") {
        wartosci_IN[1].value = -1;
    } else if (wartosci_IN[1].value == 8191) {
        wartosci_IN[1].value = -1;
    } else {
        wartosci_IN[1].value++;
    }
    zmianaWartosic();
}
function decrement_KB() {
    var wartosci_IN = document.getElementsByClassName("wartoscIN");
    if (wartosci_IN[1].value == "") {
        wartosci_IN[1].value = -1;
    } else if (wartosci_IN[1].value == -1) {
        wartosci_IN[1].value = 8191;
    } else {
        wartosci_IN[1].value--;
    }
    zmianaWartosic();
}
function list_KZ() { }

function increment_KZ() {
    var wartosci_IN = document.getElementsByClassName("wartoscIN");
    if (wartosci_IN[2].value == "") {
        wartosci_IN[2].value = -1;
    } else if (wartosci_IN[2].value == 8191) {
        wartosci_IN[2].value = -1;
    } else {
        wartosci_IN[2].value++;
    }
    zmianaWartosic();
}
function decrement_KZ() {
    var wartosci_IN = document.getElementsByClassName("wartoscIN");
    if (wartosci_IN[2].value == "") {
        wartosci_IN[2].value = -1;
    } else if (wartosci_IN[2].value == -1) {
        wartosci_IN[2].value = 8191;
    } else {
        wartosci_IN[2].value--;
    }
    zmianaWartosic();
}
function list_KZ() { }







function increment_PKW() {
    var wartosci_IN = document.getElementsByClassName("wartoscIN");
    if (wartosci_IN[3].value == "") {
        wartosci_IN[3].value = -1;
    } else if (wartosci_IN[3].value == 8191) {
        wartosci_IN[3].value = -1;
    } else {
        wartosci_IN[3].value++;
    }
    zmianaWartosic();
}
function decrement_PW() {
    var wartosci_IN = document.getElementsByClassName("wartoscIN");
    if (wartosci_IN[3].value == "") {
        wartosci_IN[3].value = -1;
    } else if (wartosci_IN[3].value == -1) {
        wartosci_IN[3].value = 8191;
    } else {
        wartosci_IN[3].value--;
    }
    zmianaWartosic();
}
function list_PW() { }

function increment_PB() {
    var wartosci_IN = document.getElementsByClassName("wartoscIN");
    if (wartosci_IN[1].value == "") {
        wartosci_IN[1].value = -1;
    } else if (wartosci_IN[1].value == 8191) {
        wartosci_IN[1].value = -1;
    } else {
        wartosci_IN[1].value++;
    }
    zmianaWartosic();
}
function decrement_PB() {
    var wartosci_IN = document.getElementsByClassName("wartoscIN");
    if (wartosci_IN[1].value == "") {
        wartosci_IN[1].value = -1;
    } else if (wartosci_IN[1].value == -1) {
        wartosci_IN[1].value = 8191;
    } else {
        wartosci_IN[1].value--;
    }
    zmianaWartosic();
}
function list_PB() { }

function increment_PZ() {
    var wartosci_IN = document.getElementsByClassName("wartoscIN");
    if (wartosci_IN[2].value == "") {
        wartosci_IN[2].value = -1;
    } else if (wartosci_IN[2].value == 8191) {
        wartosci_IN[2].value = -1;
    } else {
        wartosci_IN[2].value++;
    }
    zmianaWartosic();
}
function decrement_PZ() {
    var wartosci_IN = document.getElementsByClassName("wartoscIN");
    if (wartosci_IN[2].value == "") {
        wartosci_IN[2].value = -1;
    } else if (wartosci_IN[2].value == -1) {
        wartosci_IN[2].value = 8191;
    } else {
        wartosci_IN[2].value--;
    }
    zmianaWartosic();
}
function list_PZ() { }