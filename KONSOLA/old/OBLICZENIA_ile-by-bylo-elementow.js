var T = [                                               /*  10   11   12   13   14 */
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
         ],
        /* 19 */ [
            ["Proband", "Proband's"],
            ["Man", "Man's"],
            ["Woman", "Woman's"],
            ["Spouse", "Spouse's"],
            ["Husband", "Husband's"],
            ["Wife", "Wife's"],
            ["Child", "Child's"],
            ["Son", "Son's"],
            ["Daughter", "Daughter's"],
            ["Parent", "Parent's"],
            ["Father", "Father's"],
            ["Mother", "Mother's"],
            ["Sibling", "Sibling's"],
            ["Bbrother", "Bbrother's"],
            ["Sister", "Sister's"]            
        ],
         /* 20 */[
             ["Probands", "Probands's"],
             ["Couple", "Couple's"],
             ["Children", "Children's"],
             ["Parents", "Parents's"],
             ["Siblings", "Siblings's"]
         ] 
    ];
    var DANE = [];
    var gr = 1;
    var os = 1;
    var lev = 0;       
    var suma = 0;
    var sumasum =0

    // pzoiom 0 
    suma = gr + (os*2);
    console.log("poziom = "+lev+ " --> grup = "+gr+ " { osób = "+os+" x 2 } --> Grupy + Osoby = "+suma);
    sumasum +=suma;
    
    // pzoiom 1    
    lev = 1; gr = T[T[9][0]].length; os = T[T[9][1]].length;
    suma = gr + (os*2);
    console.log("poziom = "+lev+ " --> grup = "+gr+ " { osób = "+os+" x 2 } --> Grupy + Osoby = "+suma);
    sumasum +=suma;

    // pzoiom 2 - grupy
    gr = 0;
    for (var i2 = 0; i2 < T[T[9][0]].length; i2++) {
        var el2 = parseInt(T[T[9][0]][i2], 16);
        var gr2 = T[T[9][el2]].length;
        gr += gr2;
    }
    // pzoiom 2 - osoby
    os = 0;
      for (var i2 = 0; i2 < T[T[9][1]].length; i2++) {
        var el2 = parseInt(T[T[9][1]][i2], 16);
        var os2 = T[T[9][el2]].length;
        os += os2;
    }
    lev = 2;
    suma = gr + (os*2);
    console.log("poziom = "+lev+ " --> grup = "+gr+ " { osób = "+os+" x 2 } --> Grupy + Osoby = "+suma);
    sumasum +=suma;

    // pzoiom 3 - grupy
    gr = 0;
    for (var i2 = 0; i2 < T[T[9][0]].length; i2++) {
        var el2 = parseInt(T[T[9][0]][i2], 16);
        for (var i3 = 0; i3 < T[T[9][el2]].length; i3++) {
            var el3 = parseInt(T[T[9][el2]][i3], 16);
            var gr3 = T[T[9][el3]].length;
            gr += gr3;
        }        
    }
    // pzoiom 3 - osoby
    os = 0;
      for (var i2 = 0; i2 < T[T[9][1]].length; i2++) {
        var el2 = parseInt(T[T[9][1]][i2], 16);
        for (var i3 = 0; i3 < T[T[9][el2]].length; i3++) {
            var el3 = parseInt(T[T[9][el2]][i3], 16);
            var os3 = T[T[9][el3]].length;
            os += os3;
        }  
    }
    lev = 3;
    suma = gr + (os*2);
    console.log("poziom = "+lev+ " --> grup = "+gr+ " { osób = "+os+" x 2 } --> Grupy + Osoby = "+suma);
    sumasum +=suma;

    
    // pzoiom 4 - grupy
    gr = 0;
    for (var i2 = 0; i2 < T[T[9][0]].length; i2++) {
        var el2 = parseInt(T[T[9][0]][i2], 16);
        for (var i3 = 0; i3 < T[T[9][el2]].length; i3++) {
            var el3 = parseInt(T[T[9][el2]][i3], 16);
            for (var i4 = 0; i4 < T[T[9][el3]].length; i4++) {
                var el4 = parseInt(T[T[9][el3]][i4], 16);
                var gr4 = T[T[9][el4]].length;
                gr += gr4;
            }
        }        
    }
    // pzoiom 4 - osoby
    os = 0;
      for (var i2 = 0; i2 < T[T[9][1]].length; i2++) {
        var el2 = parseInt(T[T[9][1]][i2], 16);
        for (var i3 = 0; i3 < T[T[9][el2]].length; i3++) {
            var el3 = parseInt(T[T[9][el2]][i3], 16);
            for (var i4 = 0; i4 < T[T[9][el3]].length; i4++) {
                var el4 = parseInt(T[T[9][el3]][i4], 16);
                var os4 = T[T[9][el4]].length;
                os += os4;
            }
        }  
    }
    lev = 4;
    suma = gr + (os*2);
    console.log("poziom = "+lev+ " --> grup = "+gr+ " { osób = "+os+" x 2 } --> Grupy + Osoby = "+suma);
    sumasum +=suma;

    
    // pzoiom 5 - grupy
    gr = 0;
    for (var i2 = 0; i2 < T[T[9][0]].length; i2++) {
        var el2 = parseInt(T[T[9][0]][i2], 16);
        for (var i3 = 0; i3 < T[T[9][el2]].length; i3++) {
            var el3 = parseInt(T[T[9][el2]][i3], 16);
            for (var i4 = 0; i4 < T[T[9][el3]].length; i4++) {
                var el4 = parseInt(T[T[9][el3]][i4], 16);
                for (var i5 = 0; i5 < T[T[9][el4]].length; i5++) {
                    var el5 = parseInt(T[T[9][el4]][i5], 16);
                    var gr5 = T[T[9][el5]].length;
                    gr += gr5;
                }
            }
        }        
    }
    // pzoiom 5 - osoby
    os = 0;
      for (var i2 = 0; i2 < T[T[9][1]].length; i2++) {
        var el2 = parseInt(T[T[9][1]][i2], 16);
        for (var i3 = 0; i3 < T[T[9][el2]].length; i3++) {
            var el3 = parseInt(T[T[9][el2]][i3], 16);
            for (var i4 = 0; i4 < T[T[9][el3]].length; i4++) {
                var el4 = parseInt(T[T[9][el3]][i4], 16);
                for (var i5 = 0; i5 < T[T[9][el4]].length; i5++) {
                    var el5 = parseInt(T[T[9][el4]][i5], 16);
                    var os5 = T[T[9][el5]].length;
                    os += os5;
                }
            }
        }  
    }
    lev = 5;
    suma = gr + (os*2);
    console.log("poziom = "+lev+ " --> grup = "+gr+ " { osób = "+os+" x 2 } --> Grupy + Osoby = "+suma); 
    sumasum +=suma;


    // pzoiom 6 - grupy
    gr = 0;
    for (var i2 = 0; i2 < T[T[9][0]].length; i2++) {
        var el2 = parseInt(T[T[9][0]][i2], 16);
        for (var i3 = 0; i3 < T[T[9][el2]].length; i3++) {
            var el3 = parseInt(T[T[9][el2]][i3], 16);
            for (var i4 = 0; i4 < T[T[9][el3]].length; i4++) {
                var el4 = parseInt(T[T[9][el3]][i4], 16);
                for (var i5 = 0; i5 < T[T[9][el4]].length; i5++) {
                    var el5 = parseInt(T[T[9][el4]][i5], 16);
                    for (var i6 = 0; i6 < T[T[9][el5]].length; i6++) {
                        var el6 = parseInt(T[T[9][el5]][i6], 16);
                        var gr6 = T[T[9][el6]].length;
                        gr += gr6;
                    }
                }
            }
        }        
    }
    // pzoiom 6 - osoby
    os = 0;
      for (var i2 = 0; i2 < T[T[9][1]].length; i2++) {
        var el2 = parseInt(T[T[9][1]][i2], 16);
        for (var i3 = 0; i3 < T[T[9][el2]].length; i3++) {
            var el3 = parseInt(T[T[9][el2]][i3], 16);
            for (var i4 = 0; i4 < T[T[9][el3]].length; i4++) {
                var el4 = parseInt(T[T[9][el3]][i4], 16);
                for (var i5 = 0; i5 < T[T[9][el4]].length; i5++) {
                    var el5 = parseInt(T[T[9][el4]][i5], 16);
                    for (var i6 = 0; i6 < T[T[9][el5]].length; i6++) {
                        var el6 = parseInt(T[T[9][el5]][i6], 16);
                        var os6 = T[T[9][el6]].length;
                        os += os6;
                    }
                }
            }
        }  
    }
    lev = 6;
    suma = gr + (os*2);
    console.log("poziom = "+lev+ " --> grup = "+gr+ " { osób = "+os+" x 2 } --> Grupy + Osoby = "+suma); 
    sumasum +=suma;

    // pzoiom 7 - grupy
    gr = 0;
    for (var i2 = 0; i2 < T[T[9][0]].length; i2++) {
        var el2 = parseInt(T[T[9][0]][i2], 16);
        for (var i3 = 0; i3 < T[T[9][el2]].length; i3++) {
            var el3 = parseInt(T[T[9][el2]][i3], 16);
            for (var i4 = 0; i4 < T[T[9][el3]].length; i4++) {
                var el4 = parseInt(T[T[9][el3]][i4], 16);
                for (var i5 = 0; i5 < T[T[9][el4]].length; i5++) {
                    var el5 = parseInt(T[T[9][el4]][i5], 16);
                    for (var i6 = 0; i6 < T[T[9][el5]].length; i6++) {
                        var el6 = parseInt(T[T[9][el5]][i6], 16);
                        for (var i7 = 0; i7 < T[T[9][el6]].length; i7++) {
                            var el7 = parseInt(T[T[9][el6]][i7], 16);
                            var gr7 = T[T[9][el7]].length;
                            gr += gr7;
                        }
                    }
                }
            }
        }        
    }
    // pzoiom 7 - osoby
    os = 0;
      for (var i2 = 0; i2 < T[T[9][1]].length; i2++) {
        var el2 = parseInt(T[T[9][1]][i2], 16);
        for (var i3 = 0; i3 < T[T[9][el2]].length; i3++) {
            var el3 = parseInt(T[T[9][el2]][i3], 16);
            for (var i4 = 0; i4 < T[T[9][el3]].length; i4++) {
                var el4 = parseInt(T[T[9][el3]][i4], 16);
                for (var i5 = 0; i5 < T[T[9][el4]].length; i5++) {
                    var el5 = parseInt(T[T[9][el4]][i5], 16);
                    for (var i6 = 0; i6 < T[T[9][el5]].length; i6++) {
                        var el6 = parseInt(T[T[9][el5]][i6], 16);
                        for (var i7 = 0; i7 < T[T[9][el6]].length; i7++) {
                            var el7 = parseInt(T[T[9][el6]][i7], 16);
                            var os7 = T[T[9][el7]].length;
                            os += os7;
                        }
                    }
                }
            }
        }  
    }
    lev = 7;
    suma = gr + (os*2);
    console.log("poziom = "+lev+ " --> grup = "+gr+ " { osób = "+os+" x 2 } --> Grupy + Osoby = "+suma); 
    sumasum +=suma;


    // pzoiom 8 - grupy
    gr = 0;
    for (var i2 = 0; i2 < T[T[9][0]].length; i2++) {
        var el2 = parseInt(T[T[9][0]][i2], 16);
        for (var i3 = 0; i3 < T[T[9][el2]].length; i3++) {
            var el3 = parseInt(T[T[9][el2]][i3], 16);
            for (var i4 = 0; i4 < T[T[9][el3]].length; i4++) {
                var el4 = parseInt(T[T[9][el3]][i4], 16);
                for (var i5 = 0; i5 < T[T[9][el4]].length; i5++) {
                    var el5 = parseInt(T[T[9][el4]][i5], 16);
                    for (var i6 = 0; i6 < T[T[9][el5]].length; i6++) {
                        var el6 = parseInt(T[T[9][el5]][i6], 16);
                        for (var i7 = 0; i7 < T[T[9][el6]].length; i7++) {
                            var el7 = parseInt(T[T[9][el6]][i7], 16);
                            for (var i8 = 0; i8 < T[T[9][el7]].length; i8++) {
                                var el8 = parseInt(T[T[9][el7]][i8], 16);
                                var gr8 = T[T[9][el8]].length;
                                gr += gr8;
                            }
                        }
                    }
                }
            }
        }        
    }
    // pzoiom 8 - osoby
    os = 0;
      for (var i2 = 0; i2 < T[T[9][1]].length; i2++) {
        var el2 = parseInt(T[T[9][1]][i2], 16);
        for (var i3 = 0; i3 < T[T[9][el2]].length; i3++) {
            var el3 = parseInt(T[T[9][el2]][i3], 16);
            for (var i4 = 0; i4 < T[T[9][el3]].length; i4++) {
                var el4 = parseInt(T[T[9][el3]][i4], 16);
                for (var i5 = 0; i5 < T[T[9][el4]].length; i5++) {
                    var el5 = parseInt(T[T[9][el4]][i5], 16);
                    for (var i6 = 0; i6 < T[T[9][el5]].length; i6++) {
                        var el6 = parseInt(T[T[9][el5]][i6], 16);
                        for (var i7 = 0; i7 < T[T[9][el6]].length; i7++) {
                            var el7 = parseInt(T[T[9][el6]][i7], 16);
                            for (var i8 = 0; i8 < T[T[9][el7]].length; i8++) {
                                var el8 = parseInt(T[T[9][el7]][i8], 16);
                                var os8 = T[T[9][el8]].length;
                                os += os8;
                            }
                        }
                    }
                }
            }
        }  
    }
    lev = 8;
    suma = gr + (os*2);
    console.log("poziom = "+lev+ " --> grup = "+gr+ " { osób = "+os+" x 2 } --> Grupy + Osoby = "+suma); 
    sumasum +=suma;

    // pzoiom 9 - grupy
    gr = 0;
    for (var i2 = 0; i2 < T[T[9][0]].length; i2++) {
        var el2 = parseInt(T[T[9][0]][i2], 16);
        for (var i3 = 0; i3 < T[T[9][el2]].length; i3++) {
            var el3 = parseInt(T[T[9][el2]][i3], 16);
            for (var i4 = 0; i4 < T[T[9][el3]].length; i4++) {
                var el4 = parseInt(T[T[9][el3]][i4], 16);
                for (var i5 = 0; i5 < T[T[9][el4]].length; i5++) {
                    var el5 = parseInt(T[T[9][el4]][i5], 16);
                    for (var i6 = 0; i6 < T[T[9][el5]].length; i6++) {
                        var el6 = parseInt(T[T[9][el5]][i6], 16);
                        for (var i7 = 0; i7 < T[T[9][el6]].length; i7++) {
                            var el7 = parseInt(T[T[9][el6]][i7], 16);
                            for (var i8 = 0; i8 < T[T[9][el7]].length; i8++) {
                                var el8 = parseInt(T[T[9][el7]][i8], 16);
                               for (var i9 = 0; i9 < T[T[9][el8]].length; i9++) {
                                    var el9 = parseInt(T[T[9][el8]][i9], 16);
                                    var gr9 = T[T[9][el9]].length;
                                    gr += gr9;
                                }
                            }
                        }
                    }
                }
            }
        }        
    }
    // pzoiom 9 - osoby
    os = 0;
      for (var i2 = 0; i2 < T[T[9][1]].length; i2++) {
        var el2 = parseInt(T[T[9][1]][i2], 16);
        for (var i3 = 0; i3 < T[T[9][el2]].length; i3++) {
            var el3 = parseInt(T[T[9][el2]][i3], 16);
            for (var i4 = 0; i4 < T[T[9][el3]].length; i4++) {
                var el4 = parseInt(T[T[9][el3]][i4], 16);
                for (var i5 = 0; i5 < T[T[9][el4]].length; i5++) {
                    var el5 = parseInt(T[T[9][el4]][i5], 16);
                    for (var i6 = 0; i6 < T[T[9][el5]].length; i6++) {
                        var el6 = parseInt(T[T[9][el5]][i6], 16);
                        for (var i7 = 0; i7 < T[T[9][el6]].length; i7++) {
                            var el7 = parseInt(T[T[9][el6]][i7], 16);
                            for (var i8 = 0; i8 < T[T[9][el7]].length; i8++) {
                                var el8 = parseInt(T[T[9][el7]][i8], 16);
                               for (var i9 = 0; i9 < T[T[9][el8]].length; i9++) {
                                    var el9 = parseInt(T[T[9][el8]][i9], 16);
                                    var os9 = T[T[9][el9]].length;
                                    os += os9;
                                }
                            }
                        }
                    }
                }
            }
        }  
    }
    lev = 9;
    suma = gr + (os*2);
    console.log("poziom = "+lev+ " --> grup = "+gr+ " { osób = "+os+" x 2 } --> Grupy + Osoby = "+suma); 
    sumasum +=suma;





    console.log("Łącznie  "+sumasum + "  elementów");








