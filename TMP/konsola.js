function tabCzynniki_Z(z) {
        var tmp = [];
        var k;
        if (z != "") {
            while (z > 1) {
                if (k == 0) {
                    tmp = [];
                    k = 1;
                } else {
                    if (z % 2 == 0) {
                        tmp.unshift(2);
                        z = (z / 2);
                    } else {
                        tmp.unshift(1);
                        tmp.unshift(2);
                        z = ((z - 1) / 2);
                    }
                }
            }
        } else {
            tmp = [];
            k = 0;
        }
        console.log(k);
        return {
            czyUzyte: console.log(k),
            czynniki: console.log(tmp.join(" - "))
        };
    }

    tabCzynniki_Z("").czyUzyte;