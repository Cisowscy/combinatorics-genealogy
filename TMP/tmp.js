var KOD_wbz = function ( sep ) { this.__KOD_wbz__ = []; this.separator = "." ; };
KOD_wbz.prototype.wstaw = function( str ) { this.__KOD_wbz__.push(str); return this; };
KOD_wbz.prototype.toString = function() { return this.__KOD_wbz__.join(this.separator); };
/* ######################################################################################## */

var Tablica = (function () {
    var tablicaOsob = [];
    for (var i = 2; i < 256; i++) {
        var osoba = {};
        var nKOD = new KOD_wbz(" ");
        nKOD.wstaw(1).wstaw(i); //.wstaw(3*i);
        osoba.wbz = nKOD.toString();
        {
            if (i == 2){ osoba.kto = "brat"; }        
            else if (i == 3){ osoba.kto = "siostra"; }
            
            else if (i == 4){ osoba.kto = "brat przyrodni ojczysty"; }  
            else if (i == 5){ osoba.kto = "siostra przyrodnia ojczysta"; }
            else if (i == 6){ osoba.kto = "brat przyrodni macierzysty"; }        
            else if (i == 7){ osoba.kto = "siostra przyrodnia macierzysta"; }

            else if (i == 8){ osoba.kto = "brat stryjeczny"; }  
            else if (i == 9){ osoba.kto = "siostra stryjeczna"; }
            else if (i == 10){ osoba.kto = "brat cioteczny"; }        
            else if (i == 11){ osoba.kto = "siostra cioteczna"; }
            else if (i == 12){ osoba.kto = "brat wujeczny"; }  
            else if (i == 13){ osoba.kto = "siostra wujeczna"; }
            else if (i == 14){ osoba.kto = "brat siołeczny"; }        
            else if (i == 15){ osoba.kto = "siostra siołeczna"; }

            else if (i == 16){ osoba.kto = "brat stryjeczny przyrodni ojczysto-ojczysty"; }  
            else if (i == 17){ osoba.kto = "siostra stryjeczna przyrodnia ojczysto-ojczysta"; }
            else if (i == 18){ osoba.kto = "brat cioteczny przyrodni ojczysto-ojczysty"; }        
            else if (i == 19){ osoba.kto = "siostra cioteczna przyrodnia ojczysto-ojczysta"; }
            else if (i == 20){ osoba.kto = "brat stryjeczny przyrodni ojczysto-macierzysty"; }  
            else if (i == 21){ osoba.kto = "siostra stryjeczna przyrodnia ojczysto-macierzysty"; }
            else if (i == 22){ osoba.kto = "brat cioteczny przyrodni ojczysto-macierzysty"; }        
            else if (i == 23){ osoba.kto = "siostra cioteczna przyrodnia ojczysto-macierzysty"; }
            else if (i == 24){ osoba.kto = "brat wujeczny przyrodni macierzysto-ojczysty"; }  
            else if (i == 25){ osoba.kto = "siostra wujeczna przyrodnia macierzysto-ojczysty"; }
            else if (i == 26){ osoba.kto = "brat siołeczny przyrodni macierzysto-ojczysty"; }        
            else if (i == 27){ osoba.kto = "siostra siołeczna przyrodnia macierzysto-ojczysty"; }
            else if (i == 28){ osoba.kto = "brat wujeczny przyrodni macierzysto-ojczysty"; }  
            else if (i == 29){ osoba.kto = "siostra wujeczna przyrodnia macierzysto-ojczysty"; }
            else if (i == 30){ osoba.kto = "brat siołeczny przyrodni macierzysto-ojczysty"; }        
            else if (i == 31){ osoba.kto = "siostra siołeczna przyrodnia macierzysto-ojczysty"; }

            else if (i == 32){ osoba.kto = "brat stryjeczno przedstryjeczny ojczysty"; }  
            else if (i == 33){ osoba.kto = "siostra stryjeczno przedstryjeczna ojczysta"; }
            else if (i == 34){ osoba.kto = "brat cioteczno przedstryjeczny ojczysty"; }  
            else if (i == 35){ osoba.kto = "siostra cioteczna przedstryjeczna ojczysta"; }
            else if (i == 36){ osoba.kto = "brat stryjeczno przedcioteczny ojczysty"; }  
            else if (i == 37){ osoba.kto = "siostra stryjeczno przedcioteczna ojczysta"; }
            else if (i == 38){ osoba.kto = "brat cioteczno przedcioteczny ojczysty"; }  
            else if (i == 39){ osoba.kto = "siostra cioteczna przedcioteczna ojczysta"; }
            else if (i == 40){ osoba.kto = "brat stryjeczno przedwujeczny ojczysty"; }  
            else if (i == 41){ osoba.kto = "siostra stryjeczno przedwujeczna ojczysta"; }
            else if (i == 42){ osoba.kto = "brat cioteczno przedwujeczny ojczysty"; }  
            else if (i == 43){ osoba.kto = "siostra cioteczna przedwujeczna ojczysta"; }
            else if (i == 44){ osoba.kto = "brat stryjeczno przedsiołeczny ojczysty"; }  
            else if (i == 45){ osoba.kto = "siostra stryjeczno przedsiołeczna ojczysta"; }
            else if (i == 46){ osoba.kto = "brat cioteczno przedsiołeczny ojczysty"; }  
            else if (i == 47){ osoba.kto = "siostra cioteczna przedsiołeczna ojczysta"; }
            else if (i == 48){ osoba.kto = "brat stryjeczno przedstryjeczny macierzysty"; }  
            else if (i == 49){ osoba.kto = "siostra stryjeczno przedstryjeczna macierzysta"; }
            else if (i == 50){ osoba.kto = "brat cioteczno przedstryjeczny macierzysty"; }  
            else if (i == 51){ osoba.kto = "siostra cioteczna przedstryjeczna macierzysta"; }
            else if (i == 52){ osoba.kto = "brat stryjeczno przedcioteczny macierzysty"; }  
            else if (i == 53){ osoba.kto = "siostra stryjeczno przedcioteczna macierzysta"; }
            else if (i == 54){ osoba.kto = "brat cioteczno przedcioteczny macierzysty"; }  
            else if (i == 55){ osoba.kto = "siostra cioteczna przedcioteczna macierzysta"; }
            else if (i == 56){ osoba.kto = "brat stryjeczno przedwujeczny macierzysty"; }  
            else if (i == 57){ osoba.kto = "siostra stryjeczno przedwujeczna macierzysta"; }
            else if (i == 58){ osoba.kto = "brat cioteczno przedwujeczny macierzysty"; }  
            else if (i == 59){ osoba.kto = "siostra cioteczna przedwujeczna macierzysta"; }
            else if (i == 60){ osoba.kto = "brat stryjeczno przedsiołeczny macierzysty"; }  
            else if (i == 61){ osoba.kto = "siostra stryjeczno przedsiołeczna macierzysta"; }
            else if (i == 62){ osoba.kto = "brat cioteczno przedsiołeczny macierzysty"; }  
            else if (i == 63){ osoba.kto = "siostra cioteczna przedsiołeczna macierzysta"; }

            else if (i == 64){ osoba.kto = "brat stryjeczno przedstryjeczny przyrodni ojczysto-ojczysto-ojczysty"; }  
            else if (i == 65){ osoba.kto = "siostra stryjeczno przedstryjeczna przyrodnia ojczysto-ojczysto-ojczysta"; }
            else if (i == 66){ osoba.kto = "brat cioteczno przedstryjeczny przyrodni ojczysto-ojczysto-ojczysty"; }  
            else if (i == 67){ osoba.kto = "siostra cioteczna przedstryjeczna przyrodnia ojczysto-ojczysto-ojczysta"; }
            else if (i == 68){ osoba.kto = "brat stryjeczno przedcioteczny przyrodni ojczysto-ojczysto-ojczysty"; }  
            else if (i == 69){ osoba.kto = "siostra stryjeczno przedcioteczna przyrodnia ojczysto-ojczysto-ojczysta"; }
            else if (i == 70){ osoba.kto = "brat cioteczno przedcioteczny przyrodni ojczysto-ojczysto-ojczysty"; }  
            else if (i == 71){ osoba.kto = "siostra cioteczna przedcioteczna przyrodnia ojczysto-ojczysto-ojczysta"; }
            else if (i == 72){ osoba.kto = "brat stryjeczno przedstryjeczny przyrodni ojczysto-ojczysto-macierzysty"; }  
            else if (i == 73){ osoba.kto = "siostra stryjeczno przedstryjeczna przyrodnia ojczysto-ojczysto-macierzysta"; }
            else if (i == 74){ osoba.kto = "brat cioteczno przedstryjeczny przyrodni ojczysto-ojczysto-macierzysty"; }  
            else if (i == 75){ osoba.kto = "siostra cioteczna przedstryjeczna przyrodnia ojczysto-ojczysto-macierzysta"; }
            else if (i == 76){ osoba.kto = "brat stryjeczno przedcioteczny przyrodni ojczysto-ojczysto-macierzysty"; }  
            else if (i == 77){ osoba.kto = "siostra stryjeczno przedcioteczna przyrodnia ojczysto-ojczysto-macierzysta"; }
            else if (i == 78){ osoba.kto = "brat cioteczno przedcioteczny przyrodni ojczysto-ojczysto-macierzysty"; }  
            else if (i == 79){ osoba.kto = "siostra cioteczna przedcioteczna przyrodnia ojczysto-ojczysto-macierzysta"; }
            else if (i == 80){ osoba.kto = "brat wujeczno przedstryjeczny przyrodni ojczysto-macierzysto-ojczysty"; }  
            else if (i == 81){ osoba.kto = "siostra  wujeczno przedstryjeczna przyrodnia ojczysto-macierzysto-ojczysta"; }
            else if (i == 82){ osoba.kto = "brat siołeczno przedstryjeczny przyrodni ojczysto-macierzysto-ojczysty"; }  
            else if (i == 83){ osoba.kto = "siostra siołeczno przedstryjeczna przyrodnia ojczysto-macierzysto-ojczysta"; }
            else if (i == 84){ osoba.kto = "brat wujeczno przedcioteczny przyrodni ojczysto-macierzysto-ojczysty"; }  
            else if (i == 85){ osoba.kto = "siostra  wujeczno przedcioteczna przyrodnia ojczysto-macierzysto-ojczysta"; }
            else if (i == 86){ osoba.kto = "brat siołeczno przedcioteczny przyrodni ojczysto-macierzysto-ojczysty"; }  
            else if (i == 87){ osoba.kto = "siostra siołeczno przedcioteczna przyrodnia ojczysto-macierzysto-ojczysta"; }
            else if (i == 88){ osoba.kto = "brat wujeczno przedstryjeczny przyrodni ojczysto-macierzysto-macierzysty"; }  
            else if (i == 89){ osoba.kto = "siostra  wujeczno przedstryjeczna przyrodnia ojczysto-macierzysto-macierzysta"; }
            else if (i == 90){ osoba.kto = "brat siołeczno przedstryjeczny przyrodni ojczysto-macierzysto-macierzysty"; }  
            else if (i == 91){ osoba.kto = "siostra siołeczno przedstryjeczna przyrodnia ojczysto-macierzysto-macierzysta"; }
            else if (i == 92){ osoba.kto = "brat wujeczno przedcioteczny przyrodni ojczysto-macierzysto-macierzysty"; }  
            else if (i == 93){ osoba.kto = "siostra  wujeczno przedcioteczna przyrodnia ojczysto-macierzysto-macierzysta"; }
            else if (i == 94){ osoba.kto = "brat siołeczno przedcioteczny przyrodni ojczysto-macierzysto-macierzysty"; }  
            else if (i == 95){ osoba.kto = "siostra siołeczno przedcioteczna przyrodnia ojczysto-macierzysto-macierzysta"; }
            else if (i == 96){ osoba.kto = "brat stryjeczno przedstryjeczny przyrodni macierzysto-ojczysto-ojczysty"; }  
            else if (i == 97){ osoba.kto = "siostra stryjeczno przedstryjeczna przyrodnia macierzysto-ojczysto-ojczysta"; }
            else if (i == 98){ osoba.kto = "brat cioteczno przedstryjeczny przyrodni macierzysto-ojczysto-ojczysty"; }  
            else if (i == 99){ osoba.kto = "siostra cioteczna przedstryjeczna przyrodnia macierzysto-ojczysto-ojczysta"; }
            else if (i == 100){ osoba.kto = "brat stryjeczno przedcioteczny przyrodni macierzysto-ojczysto-ojczysty"; }  
            else if (i == 101){ osoba.kto = "siostra stryjeczno przedcioteczna przyrodnia macierzysto-ojczysto-ojczysta"; }
            else if (i == 102){ osoba.kto = "brat cioteczno przedcioteczny przyrodni macierzysto-ojczysto-ojczysty"; }  
            else if (i == 103){ osoba.kto = "siostra cioteczna przedcioteczna przyrodnia macierzysto-ojczysto-ojczysta"; }
            else if (i == 104){ osoba.kto = "brat stryjeczno przedstryjeczny przyrodni macierzysto-ojczysto-macierzysty"; }  
            else if (i == 105){ osoba.kto = "siostra stryjeczno przedstryjeczna przyrodnia macierzysto-ojczysto-macierzysta"; }
            else if (i == 106){ osoba.kto = "brat cioteczno przedstryjeczny przyrodni macierzysto-ojczysto-macierzysty"; }  
            else if (i == 107){ osoba.kto = "siostra cioteczna przedstryjeczna przyrodnia macierzysto-ojczysto-macierzysta"; }
            else if (i == 108){ osoba.kto = "brat stryjeczno przedcioteczny przyrodni macierzysto-ojczysto-macierzysty"; }  
            else if (i == 109){ osoba.kto = "siostra stryjeczno przedcioteczna przyrodnia macierzysto-ojczysto-macierzysta"; }
            else if (i == 110){ osoba.kto = "brat cioteczno przedcioteczny przyrodni macierzysto-ojczysto-macierzysty"; }  
            else if (i == 111){ osoba.kto = "siostra cioteczna przedcioteczna przyrodnia macierzysto-ojczysto-macierzysta"; }
            else if (i == 112){ osoba.kto = "brat wujeczno przedstryjeczny przyrodni macierzysto-macierzysto-ojczysty"; }  
            else if (i == 113){ osoba.kto = "siostra  wujeczno przedstryjeczna przyrodnia macierzysto-macierzysto-ojczysta"; }
            else if (i == 114){ osoba.kto = "brat siołeczno przedstryjeczny przyrodni macierzysto-macierzysto-ojczysty"; }  
            else if (i == 115){ osoba.kto = "siostra siołeczno przedstryjeczna przyrodnia macierzysto-macierzysto-ojczysta"; }
            else if (i == 116){ osoba.kto = "brat wujeczno przedcioteczny przyrodni macierzysto-macierzysto-ojczysty"; }  
            else if (i == 117){ osoba.kto = "siostra  wujeczno przedcioteczna przyrodnia macierzysto-macierzysto-ojczysta"; }
            else if (i == 118){ osoba.kto = "brat siołeczno przedcioteczny przyrodni macierzysto-macierzysto-ojczysty"; }  
            else if (i == 119){ osoba.kto = "siostra siołeczno przedcioteczna przyrodnia macierzysto-macierzysto-ojczysta"; }
            else if (i == 120){ osoba.kto = "brat wujeczno przedstryjeczny przyrodni macierzysto-macierzysto-macierzysty"; }  
            else if (i == 121){ osoba.kto = "siostra  wujeczno przedstryjeczna przyrodnia macierzysto-macierzysto-macierzysta"; }
            else if (i == 122){ osoba.kto = "brat siołeczno przedstryjeczny przyrodni macierzysto-macierzysto-macierzysty"; }  
            else if (i == 123){ osoba.kto = "siostra siołeczno przedstryjeczna przyrodnia macierzysto-macierzysto-macierzysta"; }
            else if (i == 124){ osoba.kto = "brat wujeczno przedcioteczny przyrodni macierzysto-macierzysto-macierzysty"; }  
            else if (i == 125){ osoba.kto = "siostra  wujeczno przedcioteczna przyrodnia macierzysto-macierzysto-macierzysta"; }
            else if (i == 126){ osoba.kto = "brat siołeczno przedcioteczny przyrodni macierzysto-macierzysto-macierzysty"; }  
            else if (i == 127){ osoba.kto = "siostra siołeczno przedcioteczna przyrodnia macierzysto-macierzysto-macierzysta"; }
            else {osoba.kto = "dalszy krewny w lini bocznej";}
        }
        osoba.KODwbz_iteracja_B = [];
        tablicaOsob.push(osoba);
    }
    return tablicaOsob;
   })();
  // console.log(Tablica);

   // Obliczenia
(function () { 
 for (var i = 0; i < Tablica.length; i++) {
     var el = Tablica[i];  
    
    fPrzemianaA(el);
   // console.log(el.KODwbz_iteracja_B.length);

    if (el.KODwbz_iteracja_B.length>0) {
        do {
            var dlugosc = el.KODwbz_iteracja_B.length;
            var ex = el.KODwbz_iteracja_B[dlugosc - 1];
            fPrzemianaA(el, ex);
            
        } while (dlugosc < el.KODwbz_iteracja_B.length);
        
    } else {
        
    } 
  // console.log(el);

    function fPrzemianaA(el, ex) {
        if (ex){
            var et = el;
            el = ex;
        }
        var w_get, b_get, z_get, KOD_n, w_n, b_n, z_n, tmpZ, tabZ, k;
        {
            if (el.wbz.length > 0 && el.wbz.indexOf(".") === -1){
                w_get = el.wbz;
                b_get = "";
                z_get = "";
            } else if (el.wbz.indexOf(".") === el.wbz.lastIndexOf(".")){
                w_get = el.wbz.substring(0, el.wbz.indexOf("."));
                b_get = el.wbz.substring(el.wbz.indexOf(".")+1, el.wbz.length);
                z_get = "";
            } else {         
                w_get = el.wbz.substring(0, el.wbz.indexOf("."));
                b_get = el.wbz.substring(el.wbz.indexOf(".")+1, el.wbz.lastIndexOf("."));
                z_get = el.wbz.substring(el.wbz.lastIndexOf(".")+1, el.wbz.length);
            }
        }
     
        if (b_get != "" && b_get >= 8) {
            // console.log(w_get+ "----------" +b_get+ "----------" + z_get);
           k=0;
           if (z_get != "") {
               while (z_get > 1) {
                   if (k == 0) {
                       tabZ = [];
                       k = 1;
                   } else {
                       if (z_get % 2 == 0) {
                           tabZ.unshift(2);
                           z_get = (z_get / 2);
                       } else {
                           tabZ.unshift(1);
                           tabZ.unshift(2);
                           z_get = ((z_get - 1) / 2);
                       }
                   }
               }
            } else {
               tabZ = [];
               k = 0;
            }
            if ((b_get >= Math.pow(2, Math.floor(Math.log2(b_get)))) && (b_get < (Math.pow(2, Math.floor(Math.log2(b_get))) * 1.5))) {
                w_n = w_get * 2;
                if (b_get % 2 == 0) {
                    b_n = Math.pow(2, Math.floor(Math.log2(b_get)) - 2) + ((b_get - Math.pow(2, Math.floor(Math.log2(b_get)))) / 2);
                    tmpZ = 2;
                } else {
                    b_n = Math.pow(2, Math.floor(Math.log2(b_get)) - 2) + ((b_get - 1 - Math.pow(2, Math.floor(Math.log2(b_get)))) / 2);
                    tmpZ = 3;
                }
            } else {
                w_n = w_get * 2 + 1;
                if (b_get % 2 == 0) {
                    b_n = Math.pow(2, Math.floor(Math.log2(b_get)) - 2) + ((b_get - (Math.pow(2, Math.floor(Math.log2(b_get))) * 1.5)) / 2);
                    tmpZ = 2;
                } else {
                    b_n = Math.pow(2, Math.floor(Math.log2(b_get)) - 2) + ((b_get - 1 - (Math.pow(2, Math.floor(Math.log2(b_get))) * 1.5)) / 2);
                    tmpZ = 3;
                }
            } 
            if (k == 0) {               
                z_n = tmpZ;
            } else { 
                for (var j = 0; j < tabZ.length; j++) {
                    if (tabZ[j] == 2) {
                        tmpZ = tmpZ * 2;
                    } else {
                        tmpZ = tmpZ + 1;
                    }
                } 
                z_n = tmpZ;               
            }
            var KOD_n = new KOD_wbz(" ");
            KOD_n.wstaw(w_n).wstaw(b_n).wstaw(z_n); 
            var wbz_n = {};
            wbz_n.wbz = KOD_n.toString();
            if (ex){
                et.KODwbz_iteracja_B.push(wbz_n);
            } else {
                el.KODwbz_iteracja_B.push(wbz_n);
            }
                       
          // console.log(el.wbz+"  >------>------> "+ el.KODwbz_iteracja_B);         
        }

    }


     
    



    

     
 }
})();

// utoworzenie tablicy
nowaTablica = []
for (var index = 0; index < Tablica.length; index++) {
    var pozycja= {};
    var element = Tablica[index];
    pozycja.NazwaStosunku = element.kto;
   // var tenKod = {};
    var teKODY = [];    
   // tenKod.wbz = element.wbz;
    teKODY.push(element.wbz);
    for (var inex = 0; inex < element.KODwbz_iteracja_B.length; inex++) {
        var eleent = element.KODwbz_iteracja_B[inex].wbz;
        teKODY.push(eleent);        
    }
    pozycja.KODYwbz = teKODY;
    nowaTablica.push(pozycja);
   console.log(pozycja);
}



