var ModulKombinatoryka = (function () {
    var A_KTOzKIM = [                                            /*  10   11   12   13   14 */
        /* 0  */ ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E"],
        /* 1  */ ["⚥", "♂", "♀", "U", "H", "W", "C", "S", "D", "P", "F", "M", "G", "B", "Z"],
        /* 2  */ ["0", "0", "0", "1", "1", "1", "2", "2", "2", "3", "3", "3", "4", "4", "4"],
        [],
        /* 4  */ [5, 6, 7, 5, 6, 7, 5, 6, 7, 5, 6, 7, 5, 6, 7],
        /* 5  */ ['0', '3', '6', '9', 'C'],
        /* 6  */ ['1', '4', '7', 'A', 'D'],
        /* 7  */ ['2', '5', '8', 'B', 'E'],
        [],
        /* 9  */ [10, 12, 14, 10, 12, 14, 11, 13, 15, 10, 12, 14, 11, 13, 15],
        /* 10 */ ["3", "6", "9", "C"],
        /* 11 */ ["3", "6"],
        /* 12 */ ["5", "7", "8", "A", "B", "D", "E"],
        /* 13 */ ["5", "7", "8"],
        /* 14 */ ["4", "7", "8", "A", "B", "D", "E"],
        /* 15 */ ["4", "7", "8"],
        [],
        /* 17 */ [
            ["Probant", "Probanta"],
            ["Mężczyzna", "Mężczyzny"],
            ["Kobieta", "Kobiety"],
            ["Małżonek", "Małżonka"],
            ["Mąż", "Męża"],
            ["Żona", "Żony"],
            ["Dziecko", "Dziecka"],
            ["Syn", "Syna"],
            ["Córka", "Córki"],
            ["Rodzic", "Rodzica"],
            ["Ojciec", "Ojca"],
            ["Matka", "Matki"],
            ["Rodzestwo", "Rodzestwa"],
            ["Brat", "Brata"],
            ["Siostra", "Siostry"]            
        ],
         /* 18 */[
             ["Probanci", "Probantów"],
             ["Małżonkowie", "Małżonków"],
             ["Dzieci", "Dzieci"],
             ["Rodzice", "Rodziców"],
             ["Rodzestwo", "Rodzestwa"]
         ] 
    ];
    var O_parametry = {};

    var _inParametry = function (zakres, plec, typy, jenzyk, kolumny) {        
        O_parametry.lev = zakres;
        O_parametry.sex = plec;
        O_parametry.who = typy;
        O_parametry.lan = jenzyk;     
        O_parametry.tag = kolumny;
    };
    //operacja 1
    var _ilePoziomow = function (dane01) {
        var ilePoziomow = 0;
        if (dane01[0] == dane01[1]) {
            ilePoziomow = 1;
        } else {
            var ilePoziomowTMP = 0;
            do {
                ilePoziomowTMP++;                
            } while (dane01[0] + ilePoziomowTMP < dane01[1]);
            ilePoziomow = ilePoziomowTMP + 1;
        } 
        //alert(ilePoziomow);
        return ilePoziomow;        
    };

    var _wybraniProbanci = function (ktoTaki) {
        var wybraniProbanci = [];
        var sex_G = A_KTOzKIM[5][0]; 
        var sex_M = A_KTOzKIM[6][0]; 
        var sex_W = A_KTOzKIM[7][0]; 
        if (ktoTaki === "M0") { wybraniProbanci.push(sex_M); }
        if (ktoTaki === "W0") { wybraniProbanci.push(sex_W); }
        if (ktoTaki === "MW0") { wybraniProbanci.push(sex_M); wybraniProbanci.push(sex_W); }
        if (ktoTaki === "M1") { wybraniProbanci.push(sex_G); wybraniProbanci.push(sex_M); }
        if (ktoTaki === "W1") { wybraniProbanci.push(sex_G); wybraniProbanci.push(sex_W); }
        if (ktoTaki === "MW1") { wybraniProbanci.push(sex_G);  wybraniProbanci.push(sex_M); wybraniProbanci.push(sex_W); }
        if (ktoTaki === "O1") { wybraniProbanci.push(sex_G); }
        return wybraniProbanci;
    };

    var _ZestawyKombinacji = function () {
        var A_zestawy = [];
        for (var zestaw = 0; zestaw < _ilePoziomow(O_parametry.lev); zestaw++) {
            var AA_zestawy = [];
            var poziom = O_parametry.lev[0] + zestaw;
            AA_zestawy.push(poziom); 
            AA_zestawy.push(_Kombinacje(poziom));
            A_zestawy.push(AA_zestawy)           ;
        }
        return A_zestawy;
    };

    //chwilowo tylko dla 1 poziomu
    var _Kombinacje = function (stopienZLOZONOSCI) {
        var probnci = _wybraniProbanci(O_parametry.sex);
        var A_ludzie = [];
        for (var i = 0; i < probnci.length; i++) {
            var nrProbanta = parseInt(probnci[i], 16); //numer probanta w tablicy A_KTOzKIM w wierszach 0, 1, 2, 4, 9, 17
            var grProbanta = parseInt(A_KTOzKIM[2][nrProbanta], 16); //numer grupy probanta w tablicy A_KTOzKIM w wierszu 18
            
            // UWAGA
             // UWAGA
              // UWAGA
               // UWAGA
                // UWAGA    JAK PONIŻSZE OPERACJE
                 // UWAGA     ZAPĘTLIĆ DLA 
                  // UWAGA      DOWOLNEGO
                   // UWAGA      POZIOMU
                    // UWAGA
                     // UWAGA


            //DODANIE DANYCH GDY POZIOM ZŁOŻONOŚCI = 0 DLA 0 ELEMENTU 
            if (stopienZLOZONOSCI == 0) {  
                var A_osoba0 = [];

                //grupa KOD (hex)
                var kontener0_0 = [];
                kontener0_0.push(A_KTOzKIM[2][nrProbanta]);
                A_osoba0[0] = kontener0_0.join("");

                //stosunek KOD (hex)   
                var kontener0_1 = [];
                kontener0_1.push(A_KTOzKIM[0][nrProbanta]);
                A_osoba0[1] = kontener0_1.join("");

                //stosunek KOD (txt) 
                var kontener0_2 = [];
                kontener0_2.push(A_KTOzKIM[1][nrProbanta]);
                A_osoba0[2] = kontener0_2.join("-");

                //grupa opis 
                var kontener0_3 = [];
                kontener0_3.unshift(A_KTOzKIM[18][grProbanta][0]);
                A_osoba0[3] = kontener0_3.join("-");

                //stosunek opis
                var kontener0_4 = [];
                kontener0_4.unshift(A_KTOzKIM[17][nrProbanta][0]);
                A_osoba0[4] = kontener0_4.join("-");          
                
                A_ludzie.push(A_osoba0);
            }



            //DODANIE DANYCH GDY POZIOM ZŁOŻONOŚCI = 1 DLA 0 i 1 ELEMENTU 
            if (stopienZLOZONOSCI == 1) { 
                var nrZestawuKoliOS1 = A_KTOzKIM[9][nrProbanta];
                for (var x = 0; x < A_KTOzKIM[nrZestawuKoliOS1].length; x++) {
                    var A_osoba1 = [];
                    var nrSkoligaconego = parseInt(A_KTOzKIM[nrZestawuKoliOS1][x], 16); //numer osoby skoligaconej w tablicy A_KTOzKIM w wierszach 0, 1, 2, 4, 9, 17
                    var grSkoligaconego = parseInt(A_KTOzKIM[2][nrSkoligaconego], 16); //numer grupy osoby skoligaconej w tablicy A_KTOzKIM w wierszu 18

                    //grupa KOD (hex)
                    var kontener1_0 = [];
                    kontener1_0.push(A_KTOzKIM[2][nrProbanta]);
                    kontener1_0.push(A_KTOzKIM[2][nrSkoligaconego]);
                    A_osoba1[0] = kontener1_0.join("");

                    //stosunek KOD (hex)   
                    var kontener1_1 = [];
                    kontener1_1.push(A_KTOzKIM[0][nrProbanta]);
                    kontener1_1.push(A_KTOzKIM[0][nrSkoligaconego]);
                    A_osoba1[1] = kontener1_1.join("");

                    //stosunek KOD (txt) 
                    var kontener1_2 = [];
                    kontener1_2.push(A_KTOzKIM[1][nrProbanta]);
                    kontener1_2.push(A_KTOzKIM[1][nrSkoligaconego]);
                    A_osoba1[2] = kontener1_2.join("-");

                    //grupa opis 
                    var kontener1_3 = [];
                    kontener1_3.unshift(A_KTOzKIM[18][grProbanta][1]);
                    kontener1_3.unshift(A_KTOzKIM[18][grSkoligaconego][0]);
                    A_osoba1[3] = kontener1_3.join("-");

                    //stosunek opis
                    var kontener1_4 = [];
                    kontener1_4.unshift(A_KTOzKIM[17][nrProbanta][1]);
                    kontener1_4.unshift(A_KTOzKIM[17][nrSkoligaconego][0]);
                    A_osoba1[4] = kontener1_4.join("-");          

                    A_ludzie.push(A_osoba1);
                }                
            }



            //DODANIE DANYCH GDY POZIOM ZŁOŻONOŚCI = 2 DLA 0, 1 i 2 ELEMENTU 
 /*           if (stopienZLOZONOSCI == 2) {
                var nrZestawuKoliOS2_1 = A_KTOzKIM[9][nrProbanta];
                for (var x2_1 = 0; x2_1 < A_KTOzKIM[nrZestawuKoliOS2_1].length; x2_1++) {
                    var nrSkoligaconego2_1 = parseInt(A_KTOzKIM[nrZestawuKoliOS2_1][x2_1], 16); 
                    var grSkoligaconego2_1 = parseInt(A_KTOzKIM[2][nrSkoligaconego2_1], 16); 
                    var nrZestawuKoliOS2_2 = A_KTOzKIM[9][nrSkoligaconego2_1];
                    for (var x2_2 = 0; x2_2 < A_KTOzKIM[nrZestawuKoliOS2_2].length; x2_2++) {
                        var A_osoba2 = [];


                        //grupa KOD (hex)
                        var kontener2_0 = [];
                        kontener2_0.push(A_KTOzKIM[2][nrProbanta]);
                        kontener2_0.push(A_KTOzKIM[2][nrSkoligaconego2_1]);
                        kontener2_0.push(A_KTOzKIM[2][nrSkoligaconego2_2]);
                        A_osoba2[0] = kontener2_0.join("");

                        //stosunek KOD (hex)   
                        var kontener2_1 = [];
                        kontener2_1.push(A_KTOzKIM[0][nrProbanta]);
                        kontener2_1.push(A_KTOzKIM[0][nrSkoligaconego2_1]);
                        kontener2_1.push(A_KTOzKIM[0][nrSkoligaconego2_2]);
                        A_osoba2[1] = kontener2_1.join("");

                        //stosunek KOD (txt) 
                        var kontener2_2 = [];
                        kontener2_2.push(A_KTOzKIM[1][nrProbanta]);
                        kontener2_2.push(A_KTOzKIM[1][nrSkoligaconego2_1]);
                        kontener2_2.push(A_KTOzKIM[1][nrSkoligaconego2_2]);
                        A_osoba2[2] = kontener2_2.join("-");

                        //grupa opis 
                        var kontener2_3 = [];
                        kontener2_3.unshift(A_KTOzKIM[18][grProbanta][1]);
                        kontener2_3.unshift(A_KTOzKIM[18][grSkoligaconego2_1][1]);
                        kontener2_3.unshift(A_KTOzKIM[18][grSkoligaconego2_2][0]);
                        A_osoba2[3] = kontener2_3.join("-");

                        //stosunek opis
                        var kontener2_4 = [];
                        kontener2_4.unshift(A_KTOzKIM[17][nrProbanta][1]);
                        kontener2_4.unshift(A_KTOzKIM[17][nrSkoligaconego2_1][1]);
                        kontener2_4.unshift(A_KTOzKIM[17][nrSkoligaconego2_2][0]);
                        A_osoba2[4] = kontener2_4.join("-");


                        A_ludzie.push(A_osoba2);
                    }
                }
            }
*/

        }        
        return A_ludzie;
    };



    var _outTablica = function () {
       var abcd ="";

        

        abcd = _DRUKOWANIEdoHTML();
        return abcd;
      
    };

    var _outTablicaTest = function () {
        

    };

    var _DRUKOWANIEdoHTML = function () {        
        var A_MojeDane = _ZestawyKombinacji();

        var TekstTagHTML = "<table id='TabelaTestowaDrukowana'>";
        //DLA KAZDEGO ZESTAWU  
        for (var i = 0; i < A_MojeDane.length; i++) {
            var ii = i+1;                                
            TekstTagHTML += "<tr><th colspan='6' class='TABZestawDanych'> STOSUNKI GENEALOGICZNE ZESTAW : " + ii + " </th></tr>";
            TekstTagHTML += "<tr>";
            TekstTagHTML += "<th class='TABNaglowekDanych_A'>";
            TekstTagHTML += "p.z.";
            TekstTagHTML += "</th>";
            TekstTagHTML += "<th class='TABNaglowekDanych_B'>";
            TekstTagHTML += "grupa<br>KOD<br>(hex)";
            TekstTagHTML += "</th>";
            TekstTagHTML += "<th class='TABNaglowekDanych_B'>";
            TekstTagHTML += "stosunek<br>KOD<br>(hex)";
            TekstTagHTML += "</th>";
            TekstTagHTML += "<th class='TABNaglowekDanych_A'>";
            TekstTagHTML += "stosunek<br>KOD<br>(txt)";
            TekstTagHTML += "</th>";
            TekstTagHTML += "<th class='TABNaglowekDanych_A'>";
            TekstTagHTML += "grupa opis";
            TekstTagHTML += "</th>";
            TekstTagHTML += "<th class='TABNaglowekDanych_B'>";
            TekstTagHTML += "stosunek opis";
            TekstTagHTML += "</th>";
            TekstTagHTML += "</tr>";
            //DLA KAZDEGO POZIOMU 
            var kolor_co2 = 1;
            for (var j = 0; j < A_MojeDane[i][1].length; j++) {
                kolor_co2 = ((kolor_co2+j)%2);
                TekstTagHTML += "<tr>";
                TekstTagHTML += "<td class='TABPole_A" + kolor_co2 + "'>" + A_MojeDane[i][0] + "</td>";
                TekstTagHTML += "<td class='TABPole_B" + kolor_co2 + "'>" + A_MojeDane[i][1][j][0] + "</td>";
                TekstTagHTML += "<td class='TABPole_A" + kolor_co2 + "'>" + A_MojeDane[i][1][j][1] + "</td>";
                TekstTagHTML += "<td class='TABPole_B" + kolor_co2 + "'>" + A_MojeDane[i][1][j][2] + "</td>";
                TekstTagHTML += "<td class='TABPole_A" + kolor_co2 + "'>" + A_MojeDane[i][1][j][3] + "</td>";
                TekstTagHTML += "<td class='TABPole_B" + kolor_co2 + "'>" + A_MojeDane[i][1][j][4] + "</td>";
                TekstTagHTML += "</tr>";
            }
                       
        }
        TekstTagHTML += "</table>";
        return TekstTagHTML;
    };

    var _outTest = function () {
        var demo = "(kliknij tu aby ukryć tę informację)<br><br>UWAGA STRONA PODCZAS BUDOWY - PROSZĘ ZACHOWAĆ CIERPLIWOŚĆ<br><br> ------------ WYBRANE PARAMETRY GENEROWANIA DNAYCH ------------ <br> Zakres złożoności rodziny: [ " + O_parametry.lev.join(" <---> ") + " ] <br>" + "Probant: " + O_parametry.sex + "  <br>" + "Kto będzie uwzględniony: [" + O_parametry.who.join("], [") + "] <br>" + "Nazwy koligacji w języku: " + O_parametry.lan + " <br> ------------ WYBRANE PARAMETRY WYŚWIETLANIA DNAYCH ------------ <br> zostaną wyświetlone następujące informacje: [" + O_parametry.tag.join("], [") + "]<br><br>";


        return demo;

    };



    return {
        setParametry: _inParametry,
        getTablica: _outTablica,
        getTest: _outTest,
        getTablicaTest: _outTablicaTest
    };

})();
