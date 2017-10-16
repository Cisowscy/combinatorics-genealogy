WczytywanieStrony_UkryjSekcje();
PoziomZlozonosci_inicjalizacja();


/* ################################################################

POKAZYWANIE i UKRYWANIE SEKCJI POPRZEZ KLIKNIECIE NAGŁÓWKA

################################################################### */


function WczytywanieStrony_UkryjSekcje() {
    document.getElementById('sekcja_parametry').style.display = 'block';
    document.getElementById('sekcja_filtry').style.display = 'none';
    document.getElementById('sekcja_kombinacje').style.display = 'none';
    document.getElementById('dane_filtry').style.display = 'none';
    document.getElementById('dane_tabele').style.display = 'none';
   // document.getElementById('dane_testowe').style.display = 'none';   
    document.getElementById('demo').innerHTML = " STRONA W TRAKCIE BUDOWY - NIE WSZYSTKO TU DZIAŁA <br> poziom złożoności max 1 , 2 jest spreparowane, ale nie działa, dalszych natomiast brak";

    
}



function sekcja_parametry_click() {
    var x1 = document.getElementById('sekcja_parametry');
    var x2 = document.getElementById('sekcja_filtry');
    var x3 = document.getElementById('sekcja_kombinacje');
    var z2 = document.getElementById('dane_filtry');
    var z3 = document.getElementById('dane_tabele');
    var z4 = document.getElementById('demo');
    var o3 = document.getElementById('sekcja_kombinacje');
    var ch = document.getElementById('dane_testowe');
    if (x1.style.display === 'none') {
        ch.style.display = 'block';
        x1.style.display = 'block';
        x2.style.display = 'none';
        x3.style.display = 'none';
        z2.style.display = 'none';
        z3.style.display = 'none';
        z4.innerHTML = " STRONA W TRAKCIE BUDOWY - MAŁO CO TU JESZCZE DZIAŁA, TAK JAK POWINNO";   
        o3.innerHTML = "";     
    } else {
        x1.style.display = 'none';
    }
}

function chowaj_dane_testowe() {
    var ch = document.getElementById('dane_testowe');
    var tt = document.getElementById('dane_tabele');
    if (tt.style.display === 'none') {
        ch.style.display = 'block';
    } else {
        ch.style.display = 'none';
    }
}

function sekcja_filtry_click() {
    var x2 = document.getElementById('sekcja_filtry');
    if (x2.style.display === 'none') {
        x2.style.display = 'block';
    } else {
        x2.style.display = 'none';
    }
}

function sekcja_kombinacje_click() {
    var x1 = document.getElementById('sekcja_parametry');
    var x3 = document.getElementById('sekcja_kombinacje');
    if (x3.style.display === 'none') {
        x3.style.display = 'block';
        x1.style.display = 'none';
    } else {
        x3.style.display = 'none';
    }
}

function getVals() {
    // Get slider values
    var parent = this.parentNode;
    //var slides = parent.getElementsByTagName("input");
    var slides = parent.getElementsByClassName("inputRange");
    var slide1 = parseFloat(slides[0].value);
    var slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) { var tmp = slide2; slide2 = slide1; slide1 = tmp; }

    var displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = "od " + slide1 + "° - do " + slide2 + "°";
}

function PoziomZlozonosci_inicjalizacja() {
    // Initialize Sliders
    var sliderSections = document.getElementsByClassName("range-slider");
    for (var x = 0; x < sliderSections.length; x++) {
       // var sliders = sliderSections[x].getElementsByTagName("input");
        var sliders = sliderSections[x].getElementsByClassName("inputRange");
        for (var y = 0; y < sliders.length; y++) {
            if (sliders[y].type === "range") {
                sliders[y].oninput = getVals;
                // Manually trigger event first time to display values
                sliders[y].oninput();
            }
        }
    }
}
function Klawisz_generuj_koligace() {
    var demo = document.getElementById('demo');
    var zakres = document.getElementsByClassName("inputRange");
    var TabelaDanych = document.getElementById('sekcja_kombinacje');  
    var get_zakresA = parseInt(zakres[0].value);
    var get_zakresZ = parseInt(zakres[1].value);
    if (get_zakresA > get_zakresZ) { var tmp = get_zakresZ; get_zakresZ = get_zakresA; get_zakresA = tmp; }
    var get_PlecPr = document.getElementById('PlecProbanta').value;
    var typyKrew = document.getElementsByClassName("fragmentR");
    var get_typyKrew =[];
    for (var index = 0; index < typyKrew.length; index++) {
        var element = typyKrew[index].value; 
        var pozycja = [];     
        pozycja[0] = element;
        if (typyKrew[index].checked) {
            pozycja[1] = true;
        } else {
            pozycja[1] = false;
        }
        get_typyKrew.push(pozycja);
    }
    var jenzyki = document.getElementsByClassName("wybJezyk");
    var get_jenzyk = "";
    for (var i = 0; i < jenzyki.length; i++) {
        var el = jenzyki[i];        
        if (el.checked) {
            get_jenzyk = el.value;
        } 
    }
    var wyswietlTO = document.getElementsByClassName("coWyswietlic");
    var get_wyswietlTO = [];
    for (var inPf = 0; inPf < wyswietlTO.length; inPf++) {
        var elementPf = wyswietlTO[inPf].value;
        var pozycjaPf = [];
        pozycjaPf[0] = elementPf;
        if (wyswietlTO[inPf].checked) {
            pozycjaPf[1] = true;
        } else {
            pozycjaPf[1] = false;
        }
        get_wyswietlTO.push(pozycjaPf);
    }
    
    //document.getElementById('dane_filtry').style.display = 'block';
    document.getElementById('dane_tabele').style.display = 'block';
    document.getElementById('sekcja_parametry').style.display = 'none';
    document.getElementById('sekcja_kombinacje').style.display = 'block';

    ModulKombinatoryka.setParametry([get_zakresA, get_zakresZ], get_PlecPr, get_typyKrew, get_jenzyk, get_wyswietlTO);
    TabelaDanych.innerHTML = ModulKombinatoryka.getTablica();

    

    
    
    var ch = document.getElementById('dane_testowe');
    demo.innerHTML = ModulKombinatoryka.getTest();
    ch.style.display = 'none';    
    //ModulKombinatoryka.getTablicaTest();
}
