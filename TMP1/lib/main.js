inicjalizacja();

function inicjalizacja() {
    var wartosci_IN = document.getElementsByClassName("wartoscIN");
    var wartosci_OUT = document.getElementsByClassName("wartoscOUT");
    for (var x = 0; x < wartosci_IN.length; x++) {
        var wartosc = wartosci_IN[x].value;
        if (wartosc == -1) {
            wartosci_OUT[x].innerHTML = "—";
        } else {
            wartosci_OUT[x].innerHTML = wartosc;
        }
    }
}



function ladowanie() {
    var liczba = 1;    
    max = Tabelka.length - 1;
    i = 0;
    k = -1;
    liczbaW1 = 1;
    do {
       // zerowanie
        
        if (k > -1) { 
            var liczbaB1 = liczba+i;
            Tabelka[i].numerA = [liczbaW1, liczbaB1].join(".");
            if (liczbaB1 < 8) { } else {
                var granica = Math.pow(2, (Math.floor(Math.log2(liczbaB1))));                
                var numerCl =[];
                if (liczbaB1 >= granica && liczbaB1 < 1.5 * granica) {
                    if (liczbaB1%2 ==0) {
                        var ile = (Math.pow(2, (Math.floor(Math.log2(liczbaB1))) - 2)) + ((liczbaB1 - Math.pow(2, Math.floor(Math.log2(liczbaB1))))/2); 
                        numerCl = [liczbaW1 * 2, ile, 2];
                    } else {
                        var ile2 = (Math.pow(2, (Math.floor(Math.log2(liczbaB1))) - 2)) + ((liczbaB1 - 1-Math.pow(2, Math.floor(Math.log2(liczbaB1)))) / 2);     
                        numerCl = [liczbaW1 * 2, ile2, 3];
                    }
                } else {
                    if (liczbaB1 % 2 == 0) {
                        var ile3 = (Math.pow(2, (Math.floor(Math.log2(liczbaB1))) - 2)) + ((liczbaB1 - Math.pow(2, Math.floor(Math.log2(liczbaB1))) * 1.5) / 2);  
                        numerCl = [liczbaW1 * 2 + 1, ile3, 2];
                    } else {
                        var ile4 = (Math.pow(2, (Math.floor(Math.log2(liczbaB1))) - 2)) + ((liczbaB1 - 1 - Math.pow(2, Math.floor(Math.log2(liczbaB1))) * 1.5) / 2);    
                        numerCl = [liczbaW1 * 2 + 1, ile4, 3];
                    }
                }                
                Tabelka[i].numerC = numerCl.join(".");
                if (Tabelka[i].numerB === Tabelka[i].numerC) {
                    Tabelka[i].numerD = "PRAWDA";
                }
            } 
            



            if ((Math.floor(Math.log2(liczbaB1))) % 2 == 1) {
                
                //Tabelka[i].numerC = "";
                Tabelka[i].numerF = [Math.floor(Math.log2(liczbaB1)),
                    (Math.floor(Math.log2(liczbaB1)) + 1) / 2, Math.pow(2, ((Math.floor(Math.log2(liczbaB1)) + 1) / 2))].join(" | ");
                // Tabelka[i].numerC =

            } else {
                // Tabelka[i].numerB = (Math.floor(Math.log2(liczbaB1)) + 0) / 2;
                Tabelka[i].numerF = [Math.floor(Math.log2(liczbaB1)),
                (Math.floor(Math.log2(liczbaB1)) + 0) / 2, Math.pow(2, ((Math.floor(Math.log2(liczbaB1)) + 0) / 2))].join(" | ");
                
            }

        }
      /*  var liczbaB1 = liczba_1 + k;

        //zerowanie
        Tabelka[i].numerC = "";
        if (k > -1) {
            Tabelka[i].numerA = [liczbaW1, liczbaB1].join(".");

            if (liczbaB1 < 4) {} else {
                var granica = Math.pow(2, (Math.floor(Math.log2(liczbaB1))));
                if (liczbaB1 >= granica && liczbaB1 < 1.5 * granica) {
                    liczbaW1 = liczbaW1*2;
                    Tabelka[i].numerC = liczbaW1;
                } else {
                    liczbaW1 = liczbaW1 * 2 +1;
                    Tabelka[i].numerC = liczbaW1;
                }
            }
            if ((Math.floor(Math.log2(liczbaB1)))%2==1){
                var varianty = Math.pow(2, ((Math.floor(Math.log2(liczbaB1)) + 1) / 2));
                Tabelka[i].numerD = varianty;
                Tabelka[i].numerC = "";
                Tabelka[i].numerB = [Math.floor(Math.log2(liczbaB1)),
                    (Math.floor(Math.log2(liczbaB1)) + 1) / 2].join(" | ");
               // Tabelka[i].numerC =

            } else {
               // Tabelka[i].numerB = (Math.floor(Math.log2(liczbaB1)) + 0) / 2;
                Tabelka[i].numerB = "";
                Tabelka[i].numerC = "";
                Tabelka[i].numerD = "";
            }

            //Tabelka[i].numerB = Math.floor(Math.log2(liczbaB1));
        } */
        document.getElementById("aabbcc").innerHTML += "<tr><td>" + Tabelka[i].nazwa + "</td><td>" + Tabelka[i].numerA + "</td><td class='info'>" + Tabelka[i].numerB + "</td><td>" + Tabelka[i].numerC + "</td><td>" + Tabelka[i].numerD + "</td><td>" + Tabelka[i].numerE + "</td><td>" + Tabelka[i].numerF + "</td></tr>";
        k++;
    } while (i++ < max);

}


var Tabelka = [
    { "nazwa": "osoba", "numerA": "1°", "numerB": "?", "numerC": "2°", "numerD": "Variant" },

    { "nazwa": "brat", "numerA": "", "numerB": "-", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra", "numerA": "", "numerB": "-", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },

    { "nazwa": "półbrat ojczysty", "numerA": "", "numerB": "-", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "półsiostra ojczysta", "numerA": "", "numerB": "-", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "półbrat macierzysty", "numerA": "", "numerB": "-", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "półsiostra macierzysta", "numerA": "", "numerB": "-", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },

    { "nazwa": "brat stryjeczny", "numerA": "", "numerB": "2.2.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczna", "numerA": "", "numerB": "2.2.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczny", "numerA": "", "numerB": "2.3.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczna", "numerA": "", "numerB": "2.3.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat wujeczny", "numerA": "", "numerB": "3.2.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra wujeczna", "numerA": "", "numerB": "3.2.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat siołeczny", "numerA": "", "numerB": "3.3.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra siołecnza", "numerA": "", "numerB": "3.3.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },

    { "nazwa": "brat półstryjeczny ojczysty", "numerA": "", "numerB": "2.4.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra półstryjeczna ojczysta", "numerA": "", "numerB": "2.4.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat półcioteczny ojczysty", "numerA": "", "numerB": "2.5.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra półcioteczna ojczysta", "numerA": "", "numerB": "2.5.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat półwujeczny ojczysty", "numerA": "", "numerB": "2.6.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra półwujeczna ojczysta", "numerA": "", "numerB": "2.6.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat półsiołeczny ojczysty", "numerA": "", "numerB": "2.7.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra półsiołecnza ojczysta", "numerA": "", "numerB": "2.7.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat półstryjeczny macierzysta", "numerA": "", "numerB": "3.4.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra półstryjeczna macierzysta", "numerA": "", "numerB": "3.4.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat półcioteczny macierzysta", "numerA": "", "numerB": "3.5.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra półcioteczna macierzysta", "numerA": "", "numerB": "3.5.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat półwujeczny macierzysta", "numerA": "", "numerB": "3.6.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra półwujeczna macierzysta", "numerA": "", "numerB": "3.6.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat półsiołeczny macierzysta", "numerA": "", "numerB": "3.7.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra półsiołecnza macierzysta", "numerA": "", "numerB": "3.7.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },

    { "nazwa": "brat stryjeczno przedstryjeczny ojczysty", "numerA": "", "numerB": "2.8.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno przedstryjeczna ojczysta", "numerA": "", "numerB": "2.8.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno przedstryjeczny ojczysty", "numerA": "", "numerB": "2.9.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno przedstryjeczna ojczysta", "numerA": "", "numerB": "2.9.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno przedcioteczny ojczysty", "numerA": "", "numerB": "2.10.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno przedcioteczna ojczysta", "numerA": "", "numerB": "2.10.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno przedcioteczny ojczysty", "numerA": "", "numerB": "2.11.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno przedcioteczna ojczysta", "numerA": "", "numerB": "2.11.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },    
    { "nazwa": "brat stryjeczno przedwujeczny ojczysty", "numerA": "", "numerB": "2.12.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno przedwujeczna ojczysta", "numerA": "", "numerB": "2.12.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno przedwujeczny ojczysty", "numerA": "", "numerB": "2.13.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno przedwujeczna ojczysta", "numerA": "", "numerB": "2.13.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno przedsiołeczny ojczysty", "numerA": "", "numerB": "2.14.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno przedsiołeczna ojczysta", "numerA": "", "numerB": "2.14.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno przedsiołeczny ojczysty", "numerA": "", "numerB": "2.15.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno przedsiołeczna ojczysta", "numerA": "", "numerB": "2.15.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },    
    { "nazwa": "brat wujeczno przedstryjeczny macierzysty", "numerA": "", "numerB": "3.8.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra wujeczno przedstryjeczna macierzysta", "numerA": "", "numerB": "3.8.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat siołeczno przedstryjeczny macierzysty", "numerA": "", "numerB": "3.9.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra siołeczno przedstryjeczna macierzysta", "numerA": "", "numerB": "3.9.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat wujeczno przedcioteczny macierzysty", "numerA": "", "numerB": "3.10.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra wujeczno przedcioteczna macierzysta", "numerA": "", "numerB": "3.10.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat siołeczno przedcioteczny macierzysty", "numerA": "", "numerB": "3.11.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra siołeczno przedcioteczna macierzysta", "numerA": "", "numerB": "3.11.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat wujeczno przedwujeczny macierzysty", "numerA": "", "numerB": "3.12.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra wujeczno przedwujeczna macierzysta", "numerA": "", "numerB": "3.12.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat siołeczno przedwujeczny macierzysty", "numerA": "", "numerB": "3.13.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra siołeczno przedwujeczna macierzysta", "numerA": "", "numerB": "3.13.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat wujeczno przedsiołeczny macierzysty", "numerA": "", "numerB": "3.14.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra wujeczno przedsiołeczna macierzysta", "numerA": "", "numerB": "3.14.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat siołeczno przedsiołeczny macierzysty", "numerA": "", "numerB": "3.15.2", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra siołeczno przedsiołeczna macierzysta", "numerA": "", "numerB": "3.15.3", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },

    { "nazwa": "brat stryjeczno półprzedstryjeczny ojczysto ojczysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno półprzedstryjeczna ojczysto ojczysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno półprzedstryjeczny ojczysto ojczysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno półprzedstryjeczna ojczysto ojczysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno półprzedcioteczny ojczysto ojczysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno półprzedcioteczna ojczysto ojczysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno półprzedcioteczny ojczysto ojczysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno półprzedcioteczna ojczysto ojczysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno półprzedwujeczny ojczysto ojczysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno półprzedwujeczna ojczysto ojczysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno półprzedwujeczny ojczysto ojczysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno półprzedwujeczna ojczysto ojczysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno półprzedsiołeczny ojczysto ojczysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno półprzedsiołeczna ojczysto ojczysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno półprzedsiołeczny ojczysto ojczysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno półprzedsiołeczna ojczysto ojczysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno półprzedstryjeczny ojczysto macierzysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno półprzedstryjeczna ojczysto macierzysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno półprzedstryjeczny ojczysto macierzysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno półprzedstryjeczna ojczysto macierzysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno półprzedcioteczny ojczysto macierzysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno półprzedcioteczna ojczysto macierzysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno półprzedcioteczny ojczysto macierzysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno półprzedcioteczna ojczysto macierzysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno półprzedwujeczny ojczysto macierzysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno półprzedwujeczna ojczysto macierzysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno półprzedwujeczny ojczysto macierzysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno półprzedwujeczna ojczysto macierzysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno półprzedsiołeczny ojczysto macierzysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno półprzedsiołeczna ojczysto macierzysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno półprzedsiołeczny ojczysto macierzysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno półprzedsiołeczna ojczysto macierzysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno półprzedstryjeczny macierzysto ojczysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno półprzedstryjeczna macierzysto ojczysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno półprzedstryjeczny macierzysto ojczysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno półprzedstryjeczna macierzysto ojczysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno półprzedcioteczny macierzysto ojczysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno półprzedcioteczna macierzysto ojczysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno półprzedcioteczny macierzysto ojczysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno półprzedcioteczna macierzysto ojczysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno półprzedwujeczny macierzysto ojczysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno półprzedwujeczna macierzysto ojczysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno półprzedwujeczny macierzysto ojczysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno półprzedwujeczna macierzysto ojczysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno półprzedsiołeczny macierzysto ojczysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno półprzedsiołeczna macierzysto ojczysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno półprzedsiołeczny macierzysto ojczysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno półprzedsiołeczna macierzysto ojczysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno półprzedstryjeczny macierzysto macierzysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno półprzedstryjeczna macierzysto macierzysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno półprzedstryjeczny macierzysto macierzysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno półprzedstryjeczna macierzysto macierzysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno półprzedcioteczny macierzysto macierzysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno półprzedcioteczna macierzysto macierzysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno półprzedcioteczny macierzysto macierzysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno półprzedcioteczna macierzysto macierzysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno półprzedwujeczny macierzysto macierzysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno półprzedwujeczna macierzysto macierzysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno półprzedwujeczny macierzysto macierzysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno półprzedwujeczna macierzysto macierzysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat stryjeczno półprzedsiołeczny macierzysto macierzysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra stryjeczno półprzedsiołeczna macierzysto macierzysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "brat cioteczno półprzedsiołeczny macierzysto macierzysty", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" },
    { "nazwa": "siostra cioteczno półprzedsiołeczna macierzysto macierzysta", "numerA": "", "numerB": "", "numerC": "", "numerD": "", "numerE": "", "numerF": "" }
    

];

ladowanie();

