var wartoscW1, wartoscB1, wartoscZ1, wartoscW2, wartoscB2, wartoscZ2, wartoscW3, wartoscB3, wartoscZ3;
var MAX = 4095;
var MINw = 1;
var MINb = 0;
var MINz = 2;
var BEZ = null;
var sex = 1;

INICJALIZACJA();

document.getElementById('sekcja_fieldset_div0').style.display = 'none';
document.getElementById('sekcja_fieldset_div0b').style.display ='none';
document.getElementById('sekcja_fieldset_div1').style.display = 'none';
document.getElementById('sekcja_fieldset_div3').style.display = 'none';

function plecProbanta() {
    
    var sexPROB = document.querySelectorAll(".PROBANTsex");
    if (sexPROB[0].checked) {
        sex = 0;
    } else if (sexPROB[1].checked) {
        sex = 1;
    }
    wartoscB1 = sex;  
    document.querySelectorAll(".wartosc")[1].innerHTML = wartoscB1;  
}
function sekcja_fieldset0_F() {
    var sf0 = document.getElementById('sekcja_fieldset_div0');    
        if (sf0.style.display === 'none') {    
            sf0.style.display = 'block';    
        } else {    
            sf0.style.display = 'none';    
        }    
}
function sekcja_fieldset0b_F() {
    var sf0 = document.getElementById('sekcja_fieldset_div0b');    
        if (sf0.style.display === 'none') {    
            sf0.style.display = 'block';    
        } else {    
            sf0.style.display = 'none';    
        }    
}
function sekcja_fieldset1_F() {
    var sf0 = document.getElementById('sekcja_fieldset_div1');     
        if (sf0.style.display === 'none') {    
            sf0.style.display = 'block';             
        } else {    
            sf0.style.display = 'none';
             
        }    
}
function sekcja_fieldset3_F() {
    var sf0 = document.getElementById('sekcja_fieldset_div3');     
        if (sf0.style.display === 'none') {    
            sf0.style.display = 'block';             
        } else {    
            sf0.style.display = 'none';             
        }    
}

function alternatywneKREWNY() {
    var wypiszDO = document.querySelectorAll(".alternatywne")[0];    
    var wypiszDO2 = document.querySelectorAll(".alternatywne2")[0];
    wypiszDO.innerHTML = "";
    wypiszDO2.innerHTML = "";
    AlternatywneZAPISY(wartoscW1, wartoscB1, wartoscZ1, wypiszDO, 1, wypiszDO2,sex);
}

function alternatywnePOWINOWATY() {
    var wypiszDO = document.querySelectorAll(".alternatywne")[1];
    var wypiszDO2 = document.querySelectorAll(".alternatywne2")[1];
    wypiszDO.innerHTML = "";
    wypiszDO2.innerHTML = "";
    AlternatywneZAPISY(wartoscW2, wartoscB2, wartoscZ2, wypiszDO, 2, wypiszDO2);
}

function alternatywneOBCY() {
    var wypiszDO = document.querySelectorAll(".alternatywne")[2];
    var wypiszDO2 = document.querySelectorAll(".alternatywne2")[2];
    wypiszDO.innerHTML = "";
    wypiszDO2.innerHTML = "";
    AlternatywneZAPISY(wartoscW3, wartoscB3, wartoscZ3, wypiszDO, 2, wypiszDO2);
}






function INICJALIZACJA() {
    var okno = document.querySelectorAll(".wartosc");
    wartoscW1 = null; //"";
    wartoscB1 = 1;
    wartoscZ1 = null; //"";
    wartoscW2 = null; //"";
    wartoscB2 = null; //"";
    wartoscZ2 = null; //"";
    wartoscW3 = null; //"";
    wartoscB3 = null; //"";
    wartoscZ3 = null; //"";
    if (wartoscW1 != null){okno[0].innerHTML = wartoscW1; }else{okno[0].innerHTML =""; };
    if (wartoscB1 != null){okno[1].innerHTML = wartoscB1; }else{okno[1].innerHTML =""; };
    if (wartoscZ1 != null){okno[2].innerHTML = wartoscZ1; }else{okno[2].innerHTML =""; };
    if (wartoscW2 != null){okno[3].innerHTML = wartoscW2; }else{okno[3].innerHTML =""; };
    if (wartoscB2 != null){okno[4].innerHTML = wartoscB2; }else{okno[4].innerHTML =""; };
    if (wartoscZ2 != null){okno[5].innerHTML = wartoscZ2; }else{okno[5].innerHTML =""; };
    if (wartoscW3 != null){okno[6].innerHTML = wartoscW3; }else{okno[6].innerHTML =""; };
    if (wartoscB3 != null){okno[7].innerHTML = wartoscB3; }else{okno[7].innerHTML =""; };
    if (wartoscZ3 != null){okno[8].innerHTML = wartoscZ3; }else{okno[8].innerHTML =""; };
    
    /* okno[1].innerHTML = wartoscB1;
    okno[2].innerHTML = wartoscZ1;
    okno[3].innerHTML = wartoscW2;
    okno[4].innerHTML = wartoscB2;
    okno[5].innerHTML = wartoscZ2;
    okno[6].innerHTML = wartoscW3;
    okno[7].innerHTML = wartoscB3;
    okno[8].innerHTML = wartoscZ3; */
}



function increment10w1() { wartoscW1 = zmiana(10, 0, wartoscW1); }
function increment1w1() { wartoscW1 = zmiana(1, 0, wartoscW1); }
function resetw1() { wartoscW1 = zmiana(0, 0, wartoscW1); }
function decrement1w1() { wartoscW1 = zmiana(-1, 0, wartoscW1); }
function decrement10w1() { wartoscW1 = zmiana(-10, 0, wartoscW1); }
function increment10b1() { wartoscB1 = zmiana(10, 1, wartoscB1); }
function increment1b1() { wartoscB1 = zmiana(1, 1, wartoscB1); }
function resetb1() { wartoscB1 = zmiana(0, 1, wartoscB1); }
function decrement1b1() { wartoscB1 = zmiana(-1, 1, wartoscB1); }
function decrement10b1() { wartoscB1 = zmiana(-10, 1, wartoscB1); }
function increment10z1() { wartoscZ1 = zmiana(10, 2, wartoscZ1); }
function increment1z1() { wartoscZ1 = zmiana(1, 2, wartoscZ1); }
function resetz1() { wartoscZ1 = zmiana(0, 2, wartoscZ1); }
function decrement1z1() { wartoscZ1 = zmiana(-1, 2, wartoscZ1); }
function decrement10z1() { wartoscZ1 = zmiana(-10, 2, wartoscZ1); }

function increment10w2() { wartoscW2 = zmiana(10, 3, wartoscW2); }
function increment1w2() { wartoscW2 = zmiana(1, 3, wartoscW2); }
function resetw2() { wartoscW2 = zmiana(0, 3, wartoscW2); }
function decrement1w2() { wartoscW2 = zmiana(-1, 3, wartoscW2); }
function decrement10w2() { wartoscW2 = zmiana(-10, 3, wartoscW2); }
function increment10b2() { wartoscB2 = zmiana(10, 4, wartoscB2); }
function increment1b2() { wartoscB2 = zmiana(1, 4, wartoscB2); }
function resetb2() { wartoscB2 = zmiana(0, 4, wartoscB2); }
function decrement1b2() { wartoscB2 = zmiana(-1, 4, wartoscB2); }
function decrement10b2() { wartoscB2 = zmiana(-10, 4, wartoscB2); }
function increment10z2() { wartoscZ2 = zmiana(10, 5, wartoscZ2); }
function increment1z2() { wartoscZ2 = zmiana(1, 5, wartoscZ2); }
function resetz2() { wartoscZ2 = zmiana(0, 5, wartoscZ2); }
function decrement1z2() { wartoscZ2 = zmiana(-1, 5, wartoscZ2); }
function decrement10z2() { wartoscZ2 = zmiana(-10, 5, wartoscZ2); }
 
function increment10w3() { wartoscW3 = zmiana(10, 6, wartoscW3); }
function increment1w3() { wartoscW3 = zmiana(1, 6, wartoscW3); }
function resetw3() { wartoscW3 = zmiana(0, 6, wartoscW3); }
function decrement1w3() { wartoscW3 = zmiana(-1, 6, wartoscW3); }
function decrement10w3() { wartoscW3 = zmiana(-10, 6, wartoscW3); }
function increment10b3() { wartoscB3 = zmiana(10, 7, wartoscB3); }
function increment1b3() { wartoscB3 = zmiana(1, 7, wartoscB3); }
function resetb3() { wartoscB3 = zmiana(0, 7, wartoscB3); }
function decrement1b3() { wartoscB3 = zmiana(-1, 7, wartoscB3); }
function decrement10b3() { wartoscB3 = zmiana(-10, 7, wartoscB3); }
function increment10z3() { wartoscZ3 = zmiana(10, 8, wartoscZ3); }
function increment1z3() { wartoscZ3 = zmiana(1, 8, wartoscZ3); }
function resetz3() { wartoscZ3 = zmiana(0, 8, wartoscZ3); }
function decrement1z3() { wartoscZ3 = zmiana(-1, 8, wartoscZ3); }
function decrement10z3() { wartoscZ3 = zmiana(-10, 8, wartoscZ3); }

function zmiana(opcja, pozycja, wartosc) {
    var tuWYSWIETL = document.querySelectorAll(".wartosc")[pozycja];
    if (opcja == 0) {
        wartosc = BEZ;
        if (wartosc != null){tuWYSWIETL.innerHTML = wartosc; }else{tuWYSWIETL.innerHTML = ""; };
        //tuWYSWIETL.innerHTML = wartosc;
    } else if (wartosc === null && (opcja == -1 || opcja == -10)) {
        wartosc = MAX;
        if (wartosc != null){tuWYSWIETL.innerHTML = wartosc; }else{tuWYSWIETL.innerHTML = ""; };
        //tuWYSWIETL.innerHTML = wartosc;
    } else if (wartosc === null && (opcja == 1 || opcja == 10)) {
        if (pozycja == 0 || pozycja == 3 || pozycja == 6) {
            wartosc = MINw;
            if (wartosc != null){tuWYSWIETL.innerHTML = wartosc; }else{tuWYSWIETL.innerHTML = ""; };
            //tuWYSWIETL.innerHTML = wartosc;
        } else if (pozycja == 1 || pozycja == 4 || pozycja == 7) {
            wartosc = MINb;
            if (wartosc != null){tuWYSWIETL.innerHTML = wartosc; }else{tuWYSWIETL.innerHTML = ""; };
            //tuWYSWIETL.innerHTML = wartosc;
        } else if (pozycja == 2 || pozycja == 5 || pozycja == 8) {
            wartosc = MINz;
            if (wartosc != null){tuWYSWIETL.innerHTML = wartosc; }else{tuWYSWIETL.innerHTML = ""; };
            //tuWYSWIETL.innerHTML = wartosc;
        }
    } else if ((wartosc != null || wartosc == 0)  && (opcja == -1 || opcja == -10)) {
        if (pozycja == 0 || pozycja == 3 || pozycja == 6) {
            wartosc = wartosc + (opcja);
            if (wartosc < MINw) {
                wartosc = BEZ;
            }
            if (wartosc != null){tuWYSWIETL.innerHTML = wartosc; }else{tuWYSWIETL.innerHTML = ""; };
            //tuWYSWIETL.innerHTML = wartosc;
        } else if (pozycja == 1 || pozycja == 4 || pozycja == 7) {
            wartosc = wartosc + (opcja);
            if (wartosc < MINb) {
                wartosc = BEZ;
            }
            if (wartosc != null){tuWYSWIETL.innerHTML = wartosc; }else{tuWYSWIETL.innerHTML = ""; };
            //tuWYSWIETL.innerHTML = wartosc;
        } else if (pozycja == 2 || pozycja == 5 || pozycja == 8) {
            wartosc = wartosc + (opcja);
            if (wartosc < MINz) {
                wartosc = BEZ;
            }
            if (wartosc != null){tuWYSWIETL.innerHTML = wartosc; }else{tuWYSWIETL.innerHTML = ""; };
            //tuWYSWIETL.innerHTML = wartosc;
        }
    } else if ((wartosc != null || wartosc == 0) && (opcja == 1 || opcja == 10)) {
        wartosc = wartosc + (opcja);
        if (wartosc > MAX) {
            wartosc = BEZ;
        }
        if (wartosc != null){tuWYSWIETL.innerHTML = wartosc; }else{tuWYSWIETL.innerHTML = ""; };
        //tuWYSWIETL.innerHTML = wartosc;
    }

    //if (wartosc != null){wartosc = wartosc; }else{wartosc = ""; };
    return wartosc;
}