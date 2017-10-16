function test(wbz) {    
    console.log("stary KOD: "+ wbz.join("."));
    var w = wbz[0];
    var b = wbz[1];
    var z = wbz[2];
    var nW;
    var nB;
    var nZ;
    var tmpZ;
    var tmp =[];

    while (b >= 8) {
        var k = 0;
        if (z >= 2) {
            console.log(" tak, z jest wieksze lub rowne od 2 : (" + z +")");
            while (z > 1) {
                if (k != 0) {
                    if (z % 2 == 0) {
                        tmp.unshift(2);
                        z = (z / 2);
                    } else {
                        tmp.unshift(1);
                        tmp.unshift(2);
                        z = ((z - 1) / 2);
                    }
                } else {
                    tmp = [];
                    k++;
                }

            }
        } else {
            console.log(" nie, z jest mniejsze od 2 : (" + z +")");
            if ((b >= Math.pow(2, Math.floor(Math.log2(b)))) && (b < (Math.pow(2, Math.floor(Math.log2(b))) * 1.5))) {
                console.log("A1");
                nW = w * 2;
                if (b % 2 == 0) {
                    console.log("A1 - B1");
                    nB = Math.pow(2, Math.floor(Math.log2(b)) - 2) + ((b - Math.pow(2, Math.floor(Math.log2(b)))) / 2);
                    tmpZ = 2;
                } else {
                    console.log("A1 - B2");
                    nB = Math.pow(2, Math.floor(Math.log2(b)) - 2) + ((b - 1 - Math.pow(2, Math.floor(Math.log2(b)))) / 2);
                    tmpZ = 3;
                }
            } else {
                console.log("A2");
                nW = w * 2 + 1;
                if (b % 2 == 0) {
                    console.log("A2 - B1");
                    nB = Math.pow(2, Math.floor(Math.log2(b)) - 2) + ((b - (Math.pow(2, Math.floor(Math.log2(b))) * 1.5)) / 2);
                    tmpZ = 2;
                } else {
                    console.log("A2 - B1");
                    nB = Math.pow(2, Math.floor(Math.log2(b)) - 2) + ((b - 1 - (Math.pow(2, Math.floor(Math.log2(b))) * 1.5)) / 2);
                    tmpZ = 3;
                }
            }
            
        if (k = 0) {
            nZ = tmpZ;
        } else {
            for (var i = 0; i < tmp.length; i++) {
                if (tmp[i] == 2) {
                    tmpZ = tpmZ * 2;
                } else {
                    tmpZ = tpmZ + 1;
                }
            }
            nZ = tmpZ;
        }
        }        
      
        var nWBZ = [nW, nB, nZ];
       // wydruk.innerHTML += nWBZ.join(" . ") + "<br>";
       console.log("alternatywna wartosc: "+ nWBZ.join(" . "));
       w=nW;
       b=nB;
       z=nZ;
    }

}

test([1, 128, 0]);