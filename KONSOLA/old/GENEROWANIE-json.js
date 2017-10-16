require('console.table');
var T = [        /*  H O R I Z O N T A L  I N D E X                            10   11   12   13   14 */
    /* 0  I (Hi_os) */ ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E"], // kod osoby hex  --> (Hi_os_i) IH - Horyzontalny index _os _i - iteracja / poziom
    /* 1  N (Hi_os)   */ ["⚥", "♂", "♀", "U", "H", "W", "C", "S", "D", "P", "F", "M", "G", "B", "Z"], // kod osoby txt
    /* 2  D (Hi_os)   */ ["0", "0", "0", "1", "1", "1", "2", "2", "2", "3", "3", "3", "4", "4", "4"], // kod grupy hex  --> (Hi_gr_i) IH - Horyzontalny index _gr _i - iteracja / poziom
    [],/* E */
    /* 4  X (Hi_os) */ [5, 6, 7, 5, 6, 7, 5, 6, 7, 5, 6, 7, 5, 6, 7],  // płeć osoby (Hi_sex_i)
    /* 5    (Hi_sex*) */ ["0", "3", "6", "9", "C"], // kod hex osób będących płci (⚥) 
    /* 6    (Hi_sex*) */ ["1", "4", "7", "A", "D"], // kod hex osób będących płci (♂)
    /* 7    (Hi_sex*) */ ["2", "5", "8", "B", "E"], // kod hex osób będących płci (♀)
    [],/* V */
    /* 9  E (Hi_os) */ [10, 12, 14, 10, 12, 14, 11, 13, 15, 10, 12, 14, 11, 13, 15],  //(Hi_kol_i)
    /* 10 R (Hi_kol*) */ ["3", "6", "9", "C"],
    /* 11 T (Hi_kol*) */ ["3", "6"],
    /* 12 I (Hi_kol*) */ ["5", "7", "8", "A", "B", "D", "E"],
    /* 13 C (Hi_kol*) */ ["5", "7", "8"],
    /* 14 A (Hi_kol*) */ ["4", "7", "8", "A", "B", "D", "E"],
    /* 15 L (Hi_kol*) */ ["4", "7", "8"]
];
var L = [[],[],[],[]];
var Ln = [[],[],[],[]];

var people = [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]]
console.table(people);

function test1(tab,i) {
    var Hi_os = parseInt(T[0][i], 16); // (H) Poziomy index : 0 osoby   


    console.log(Hi_os); 
    var Hi_gr = parseInt(T[2][i], 16); // (H) Poziomy index : 0 grupy 
    var Vi_sex = T[4][i];              // (V) Pionowy index : 0 płci 
    var Vi_kol = T[9][i];              // (V) Pionowy index : 0 koligacji
    var Vt_kol = T[Vi_kol];           //       Pod tablica : 0 koligacji

    var hxKODgr = T[2][Hi_os]; // hex KOD grupy
    var hxKODos = T[0][Hi_os]; // hex KOD osoby
    var txKODos = T[1][Hi_os]; // txt KOD osoby

    Ln[i].push(txKODos_0);    
}
for (var i0 = 0; i0 <3; i0++) {
    test1(T,i0);
}







for (var i0 = 0; i0 <3; i0++) {
    var Hi_os_0 = parseInt(T[0][i0], 16); // (H) Poziomy index : 0 osoby   
    var Hi_gr_0 = parseInt(T[2][i0], 16); // (H) Poziomy index : 0 grupy 
    var Vi_sex_0 = T[4][i0];              // (V) Pionowy index : 0 płci 
    var Vi_kol_0 = T[9][i0];              // (V) Pionowy index : 0 koligacji
    var Vt_kol_0 = T[Vi_kol_0];           //       Pod tablica : 0 koligacji
    
    var hxKODgr_0 = T[2][Hi_os_0]; // hex KOD grupy
    var hxKODos_0 = T[0][Hi_os_0]; // hex KOD osoby
    var txKODos_0 = T[1][Hi_os_0]; // txt KOD osoby
    L[0].push(txKODos_0);

    for (var i1 = 0; i1 < Vt_kol_0.length; i1++) {


    }

    

    
    

    
    

    var os0h = T[0][i0]; // hex osoby z poziomu 0
    var os0t = T[1][i0]; // txt osoby z poziomu 0
    var os0g = T[1][i0]; // hex grupy osoby z poziomu 0

    
    


    


    var zk0 = T[9][i0]; // numer zestawu koligacji
    var tk0 = T[zk0]; //tabela koligacji
    for (var i1 =0; i1 < tk0.length; i1++) {
        var os1ht = []; //tablica składowych osoby
        var os1h = T[0][parseInt(tk0[i1], 16)]; // ozoba z poziomu 
        os1ht.push(os0h);
        os1ht.push(os1h);
        L[1].push(os1ht.join(""));
    
        var zk1 = T[9][i1]; // numer zestawu koligacji
        var tk1 = T[zk1]; //tabela koligacji
        for (var i2 =0; i2 < tk1.length; i2++) {
            var os2ht = []; //tablica składowych osoby
            var os2h = T[0][parseInt(tk0[i2], 16)]; // ozoba z poziomu 
            os2ht.push(os0h);
            os2ht.push(os1h);
            os2ht.push(os2h);
            L[2].push(os2ht.join(""));
        }
    }
}

