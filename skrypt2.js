var scalTEKSTY = function () {
    this.__TEKSTY__ = [];
};
scalTEKSTY.prototype.wstaw = function (str) {
  //  if (typeof str != "undefined" && str != "") {
    if (str === 0 || str === 1 || str >1) {
        this.__TEKSTY__.push(str);
    }
    return this;
};
scalTEKSTY.prototype.separator = function (sep) {
    return this.__TEKSTY__.join(sep);
};
var WBZ_abc123 = function() {
    // var Cyfry2Litery = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
     this.__KOD__ = new String();
 };
 
 WBZ_abc123.prototype.WBZtoABC = function (WBZ_123) { 
     var KODget = WBZ_123;
     var w_get, b_get, z_get;
     if (KODget.length > 0 && KODget.indexOf(".") === -1) {
         w_get = KODget;
         b_get = null;
         z_get = null;
     } else if (KODget.indexOf(".") === KODget.lastIndexOf(".")) {
         w_get = KODget.substring(0, KODget.indexOf("."));
         b_get = KODget.substring(KODget.indexOf(".") + 1, KODget.length);
         z_get = null;
     } else {
         w_get = KODget.substring(0, KODget.indexOf("."));
         b_get = KODget.substring(KODget.indexOf(".") + 1, KODget.lastIndexOf("."));
         z_get = KODget.substring(KODget.lastIndexOf(".") + 1, KODget.length);
     }
     var GET_tab = [w_get, b_get, z_get]; 
     var T00 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].length;
     var kluczT00 =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];    
     var SET_tab = [];
     for (var ii = 0; ii < GET_tab.length; ii++) {
         WBZ_123 = GET_tab[ii];
         if (WBZ_123 != null) {
             var WBZ_abc = "";
             if (WBZ_123 != 0) {
                 while (WBZ_123 > 0) {
                     WBZ_abc = kluczT00[(WBZ_123 % T00)] + WBZ_abc;
                     WBZ_123 = Math.floor(WBZ_123 / T00);
                 }
             } else {
                 WBZ_abc = kluczT00[0];
             }
             SET_tab.push(WBZ_abc);
        }        
    }     
     return this.__KOD__= SET_tab.join(".");    
 };
 
 WBZ_abc123.prototype.WBZto123 = function (WBZ_abc) {
    var KODget = WBZ_abc;
    var w_get, b_get, z_get;
    if (KODget.length > 0 && KODget.indexOf(".") === -1) {
        w_get = KODget;
        b_get = null;
        z_get = null;
    } else if (KODget.indexOf(".") === KODget.lastIndexOf(".")) {
        w_get = KODget.substring(0, KODget.indexOf("."));
        b_get = KODget.substring(KODget.indexOf(".") + 1, KODget.length);
        z_get = null;
    } else {
        w_get = KODget.substring(0, KODget.indexOf("."));
        b_get = KODget.substring(KODget.indexOf(".") + 1, KODget.lastIndexOf("."));
        z_get = KODget.substring(KODget.lastIndexOf(".") + 1, KODget.length);
    }
    var GET_tab = [w_get, b_get, z_get]; 
    var kluczT00 =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]; 
    var SET_tab = [];
    for (var ii = 0; ii < GET_tab.length; ii++) {
        WBZ_abc = GET_tab[ii];
        if (WBZ_abc != null) {
            var WBZ_123 = [];
            for (var d in WBZ_abc) {
                 if (WBZ_abc.hasOwnProperty(d)) {
                     var elementd = WBZ_abc[d];
                     function porownajKOD(elt) {
                         return elt === WBZ_abc[d];
                     }
                     WBZ_123.push(kluczT00.findIndex(porownajKOD));
                 }
            }
            SET_tab.push(WBZ_123.join(""));
        }
    }
    return this.__KOD__= SET_tab.join("."); 

    
    // return this.__KOD__= WBZ_123.join("");    
 };


/* ---###############################################################################################--- */
!function() {
    function _dynamicSortMultiple(attr) {
        var props = arguments;
        return function (obj1, obj2) {
            var i = 0, result = 0, numberOfProperties = props.length;
            /* try getting a different result from 0 (equal)
                     * as long as we have extra properties to compare
                     */
                    while(result === 0 && i < numberOfProperties) {
                        result = _dynamicSort(props[i])(obj1, obj2);
                        i++;
                    }
                    return result;
                }
            }
    function _dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1, property.length - 1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
    Array.prototype.sortBy = function() {
        return this.sort(_dynamicSortMultiple.apply(null, arguments));
    }
}();
/* ---###############################################################################################--- */
function WBZ_KOD_strTOarr(KODget) {
    var w_get, b_get, z_get;
   var wbz = {};
    if (KODget.length > 0 && KODget.indexOf(".") === -1) {
        w_get = KODget;
        b_get = null;
        z_get = null;
    } else if (KODget.indexOf(".") === KODget.lastIndexOf(".")) {
        w_get = KODget.substring(0, KODget.indexOf("."));
        b_get = KODget.substring(KODget.indexOf(".") + 1, KODget.length);
        z_get = null;
    } else {
        w_get = KODget.substring(0, KODget.indexOf("."));
        b_get = KODget.substring(KODget.indexOf(".") + 1, KODget.lastIndexOf("."));
        z_get = KODget.substring(KODget.lastIndexOf(".") + 1, KODget.length);
    }
    if (w_get != null) {
        wbz.w = Number(w_get);
    } 
    if (b_get != null) {
        wbz.b = Number(b_get);
    } 
    if (z_get != null) {
        wbz.z = Number(z_get);
    } 
    return wbz;
}


function ZMNIEJSZANIE_B(KODget) {
    // var [w_get, b_get, z_get] = konwersjaKODU_strTOarr(KODget);
    var w_get, b_get, z_get, KOD_out, KOD_n_STR;
    w_get = konwersjaKODU_strTOarr(KODget)[0];
    b_get = konwersjaKODU_strTOarr(KODget)[1];
    z_get = konwersjaKODU_strTOarr(KODget)[2];
    //console.log(w_get, b_get, z_get);  
    if (b_get != null && b_get >= 8) {
        //alert(w_get+ "----------" +b_get+ "----------" + z_get);
        // console.log(w_get+ "----------" +b_get+ "----------" + z_get);
        k = 0;
        if (z_get != null) {
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
        //alert(tabZ);        
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
        var KOD_n = new scalTEKSTY();
        KOD_n.wstaw(w_n).wstaw(b_n).wstaw(z_n);
        KOD_n_STR = KOD_n.separator(".");
    }
    if (typeof KOD_n_STR != "undefined") {
        KOD_out = KOD_n_STR;
    } else {
        KOD_out = null;
    }
    return KOD_out;
}

function ZMNIEJSZANIE_W(KODget) {
    // var [w_get, b_get, z_get] = konwersjaKODU_strTOarr(KODget);
    var w_get, b_get, z_get, KOD_out, KOD_n_STR;
    w_get = konwersjaKODU_strTOarr(KODget)[0];
    b_get = konwersjaKODU_strTOarr(KODget)[1];
    z_get = konwersjaKODU_strTOarr(KODget)[2];

    if (w_get > 1 && z_get != null && b_get > 1) {
        //alert(w_get+" . "+b_get+" . "+z_get);
        // nowe W
        w_n = Math.floor(w_get / 2);
        //alert(w_n);
        //nowe Z
        tmpZ = null;
        k = 0;
        OST_z_get = null;
        if (z_get > 3) {
            while (z_get > 3) {
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
        if (k == 0) {
            z_n = tmpZ;
        } else {
            tmpZ = 1;
            for (var j = 0; j < tabZ.length; j++) {
                if (tabZ[j] == 2) {
                    tmpZ = tmpZ * 2;
                } else {
                    tmpZ = tmpZ + 1;
                }
            }
            z_n = tmpZ;
        }
        // nowe B
        OST_z_get = z_get;
        tmpB_il = null;
        tmpBZ_il = null;
        tmp_il = null;
        tmpB_il = ((Math.abs(b_get - Math.pow(2, Math.floor(Math.log2(b_get)))) * 2) / (Math.pow(2, Math.floor(Math.log2(b_get))) * 2)) / 2;
        tmpBZ_il = (1 / (Math.pow(2, Math.floor(Math.log2(b_get))) * 2)) / 2;
        if (w_get % 2 == 0) {
            if (OST_z_get % 2 == 0) {
                tmp_il = 1 + tmpB_il;
                b_n = Math.pow(2, 2 + Math.floor(Math.log2(b_get))) * tmp_il;
            } else {
                tmp_il = 1 + tmpB_il + tmpBZ_il;
                b_n = Math.pow(2, 2 + Math.floor(Math.log2(b_get))) * tmp_il;
            }
        } else {
            if (OST_z_get % 2 == 0) {
                tmp_il = 1.5 + tmpB_il;
                b_n = Math.pow(2, 2 + Math.floor(Math.log2(b_get))) * tmp_il;
            } else {
                tmp_il = 1.5 + tmpB_il + tmpBZ_il;
                b_n = Math.pow(2, 2 + Math.floor(Math.log2(b_get))) * tmp_il;
            }
        }
        var KOD_n = new scalTEKSTY();
        KOD_n.wstaw(w_n).wstaw(b_n).wstaw(z_n);
        KOD_n_STR = KOD_n.separator(".");
    }
    if (typeof KOD_n_STR != "undefined") {
        KOD_out = KOD_n_STR;
    } else {
        KOD_out = null;
    }
    return KOD_out;
}

function konwersjaKODU_strTOarr(KODget) {
    var w_get, b_get, z_get;
    if (KODget.length > 0 && KODget.indexOf(".") === -1) {
        w_get = KODget;
        b_get = null;
        z_get = null;
    } else if (KODget.indexOf(".") === KODget.lastIndexOf(".")) {
        w_get = KODget.substring(0, KODget.indexOf("."));
        b_get = KODget.substring(KODget.indexOf(".") + 1, KODget.length);
        z_get = null;
    } else {
        w_get = KODget.substring(0, KODget.indexOf("."));
        b_get = KODget.substring(KODget.indexOf(".") + 1, KODget.lastIndexOf("."));
        z_get = KODget.substring(KODget.lastIndexOf(".") + 1, KODget.length);
    }
    return [w_get, b_get, z_get];
    //console.log(w_get, b_get, z_get);    
}
function TozsameKODY(KOD_in, wydruk2) {
    var KOD_in_W2 = KOD_in;
    var KOD_in_B2 = KOD_in;
    var KODY_half_out = [];
    if (KOD_in != null) {
        KODY_half_out.push(KOD_in);
    }
    //var Licznik =0;
    console.log("-----------------------------------------");
    //console.log(Licznik, KOD_in); 
    do {
        var eW2;
        eW2 = ZMNIEJSZANIE_W(KOD_in_W2);
        KOD_in_W2 = eW2;
        if (eW2 != null) {
            KODY_half_out.push(eW2);
        }
        //Licznik++;
        //console.log(Licznik, eW2);    
    } while (eW2 != null);
    do {
        var eB2;
        eB2 = ZMNIEJSZANIE_B(KOD_in_B2);
        KOD_in_B2 = eB2;
        if (eB2 != null) {
            KODY_half_out.push(eB2);
        }
        //Licznik++;
        //console.log(Licznik, eB2);    
    } while (eB2 != null);

    // tablica 1
    //console.log(KODY_half_out);
    var KODY_out = [];
    for (var jj = 0; jj < KODY_half_out.length; jj++) {
        var tenKOD = KODY_half_out[jj];
        KODY_out.push(WBZ_KOD_strTOarr(tenKOD));        
    }
    KODY_out.sortBy("w","z","b");
    var KODY_out2 = [];
    KODY_out.forEach(function(val, i) {
        var KODy_sort = new scalTEKSTY();
        KODy_sort.wstaw(val["w"]).wstaw(val["b"]).wstaw(val["z"]);     
        KODY_out2.push(KODy_sort.separator("."));          
    }, this);


   // KODY_out.forEach(function(el, i) {
    //    console.log(el, i); //wypisze kolejno elementy tablicy np. Marcin 0, Ania 1...
    //});


   /*  var OUT_out = KODY_out.map(function(val, i) {
        var KODy_sort = new scalTEKSTY();
        KODy_sort.wstaw(val["w"]).wstaw(val["b"]).wstaw(val["z"]);
        //KODY_out2.push(KODy_sort.separator("."));

        return KODy_sort.separator(".");
    }); */
   
  //  document.getElementById("res").innerText = "result:\nw b z\n-----\n" + KODY_out
  //  .sortBy("w","z","b")
  //  .map(function(val, i) {return [val["w"], val["b"], val["z"]].join(".")})
  //  .join("\n");
    /*    
    // tablica 2 przekonwertowana na litery
    var KODY_half2_out =[];
    KODY_half_out.forEach(function(el, i) {            
       var KOD_litrowyFORsort = new WBZ_abc123();
       KODY_half2_out.push(KOD_litrowyFORsort.WBZtoABC(el));           
    });
   // console.log(KODY_half2_out);
    // tablica 3 posortowana tablica
    KODY_half2_out.sort();
   // console.log(KODY_half2_out);
    // tablica 4 ponownie przekonwertowana na cyfry
    var KODY_half3_out =[];
    KODY_half2_out.forEach(function(el, i) {            
       var KOD_liczbowyFROMsort = new WBZ_abc123();
       KODY_half3_out.push(KOD_liczbowyFROMsort.WBZto123(el));           
    });
    // return KODY_half3_out;    
    //console.log(KODY_half3_out); 
    
    */   
    //return OUT_out;    
    return KODY_out2;     
  }

/* ---###############################################################################################--- */

function AlternatywneZAPISY(w, b, z, wydruk, jakie, wydruk2, sex) {
    var walidacja = 0;
    //sexPROBANTA();

    //WALIDACJA
    if (w === null && jakie != 2) {
        wydruk.innerHTML += "<b>Popraw Numery</b><br><br> podaj 'w' 1 dla probanta lub wyższą wartość dla jego przodków (ojciec x * 2; matka x * 2 + 1)<br><br><button class='klawisz'>Walidacja</button>";
        walidacja = 0;
    } else if (jakie != 1 && w === null && b === null && z === null) {
        wydruk.innerHTML = "Walidacja";
        walidacja = 1;
    } else if (w === null && (b != null || z != null || b == 0)) {
        wydruk.innerHTML += "<b>Popraw Numery</b><br><br> jeeżli podałeś 'b' lub/oraz podałeś 'z'musisz podać 'w' (ojciec x * 2; matka x * 2 + 1)<br><br><button class='klawisz'>Walidacja</button>";
        walidacja = 0;
    } else if (z != null && b === null) {
        wydruk.innerHTML += "<b>Popraw Numery</b><br><br> podałeś 'w' dla probanta lub jego przodka, oraz podałeś 'z' dla jegozstępnego, to musisz także podać 'b', jeśli zstępni są potomkami rodzonego brata to podaj 2, jeżeli siostry rodzonej to 3, jeżeli są to potomkowie probanta to podaj 0 jeśli probant był mężczyzną lub 1 jeśli był kobietą<br><br><button class='klawisz'>Walidacja</button>";
        walidacja = 0;
    /*} else if (w > 1 && (b == 0 || b == 1) ) {
        wydruk.innerHTML += "<b>Popraw Numery</b><br><br> ?? jeżeli chcesz podać 'b' lub/oraz 'z', i jeśli 'w' > 1, to nie może być b < 2<br><br><button class='klawisz'>Walidacja</button>";
        walidacja = 0; */
    } else {
        walidacja = 1;
        wydruk.innerHTML = "Walidacja";
    }
    if (walidacja == 1 && w != null) {
        if (sex == 0) {
            wydruk2.innerHTML = "<i> płeć probant </i>: <b> ♂ </b>";        
        }
        if (sex == 1) {
            wydruk2.innerHTML = "<i> płeć probant </i>: <b> ♀ </b>";
        }
        var KODwbz = new scalTEKSTY();
        KODwbz.wstaw(w).wstaw(b).wstaw(z);
        //alert(b);
        wydruk2.innerHTML += "<br><hr><i>podany kod (wbz) </i>: "; 
        wydruk2.innerHTML += KODwbz.separator(".");
        wydruk2.innerHTML += "<br><hr><i>tożsame kody (wbz) </i> : <br>";  
        //TozsameKODY(KODwbz.separator("."),wydruk2) ;
        wydruk2.innerHTML += TozsameKODY(KODwbz.separator(".")).join("  /  ");   
        wydruk2.innerHTML += "<br><hr>";  
    }
}

 






 
