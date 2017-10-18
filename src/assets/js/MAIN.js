let tytulStrony1 = "Kombinatoryka Genealogiczna";
let tytulStrony2 = "Metoda Numeracji Aitzinger`a - Cisowski`ego";

//wymiary
$(function () {
    $("body")
        .append("<button id='div0' class='kl_niewiedzialne elel_N kazdyEL elel_1'></button>")
        .append("<button id='div1' class='kl_niewiedzialne elel_N kazdyEL elel_4'></button>")
        .append("<button id='div2' class='kl_niewiedzialne elel_N kazdyEL elel_4'></button>")
        .append("<button id='div3' class='kl_niewiedzialne elel_N kazdyEL elel_4'></button>")
        .append("<button id='div4' class='kl_niewiedzialne elel_N kazdyEL elel_4'></button>")
        .append("<fieldset class='kl_przestrzen kazdyEL kl_niewiedzialne'></fieldset>")
        .append("<button class='kl_przestrzen_FULL kazdyEL kl_niewiedzialne' onclick='toggleFullScreen()'></button>");
        
        pozycja_el();   
    $( window ).resize(function() {
        pozycja_el();   
    });
    $("#div0")
        .append("<h2>" + tytulStrony1 + "</h2>")
        .append("<hr>")
        .append("<h5>" + tytulStrony2 + "</h5>");
    $("#div1").append("<h4>Metoda</h4>");
    $("#div2").append("<h4>Przyszła<br>Aplikacja</h4>");
    $("#div3").append("<h4>Nazwy<br>Stosunków</h4>");    
    $("#div4").append("<h4>Historia</h4>");
    $(".kl_przestrzen")
        .append("<legend class='kl_przestrzen_Tytul kazdyEL'></legend>")
        .append("<button class='kl_przestrzen_czerwonyX kazdyEL kl_niewiedzialne' onclick='klawiszeON_przestrzenOFF()'></button>")
        //.append("<button class='kl_przestrzen_FULL kazdyEL kl_niewiedzialne' onclick='toggleFullScreen()'></button>")
        .append("<div class='kl_przestrzen_kontener'><p class='kl_pusteLinie'>kontener</p></div>");
    $(".kl_przestrzen_czerwonyX").append("&#x274c;"); 
    $(".kl_przestrzen_FULL").append("&#x21f1;").addClass("kl_CLICK").removeClass("kl_niewiedzialne"); 
    puste_linie(25, ".kl_przestrzen_kontener");
});

function pozycja_el() {
    let rem5 = 5*16;
    let rem7 = 7*16;
    let rem9 = 9*16;
    let rem30 = 30*16;
    let Hq = ($("body").innerWidth()/4);
    let Vq = ($("body").innerHeight()/4);
    //if (rem41+rem9>)
    $("#div0")
        .css({
            left: Math.floor(2*Hq-rem30/2), 
            top: Math.floor(2*Vq-rem7/2)
        });
    $("#div1")
        .css({
            left: Math.floor(3*Hq-rem9/2), 
            top: Math.floor(Vq-rem5/2)
        });
    $("#div2")
        .css({
            left: Math.floor(3*Hq-rem9/2), 
            top: Math.floor(3*Vq-rem5/2)
        });
    $("#div3")
        .css({
            left: Math.floor(Hq-rem9/2), 
            top: Math.floor(3*Vq-rem5/2)
        });
    $("#div4")
        .css({
            left: Math.floor(Hq-rem9/2), 
            top: Math.floor(Vq-rem5/2)
        });
    
}
$.when( $.ready ).then(function() {
    
    // Document is ready.
    $("#div0")        
        .fadeOut(2000, function() {
            $(".elel_4").fadeOut(); 
            $(this)
                .removeClass( "kl_niewiedzialne" )
                .fadeIn(3000, function() {
                    $(".elel_4")
                        .removeClass( "kl_niewiedzialne" )
                        .fadeIn(2000, function() {
                            $(".elel_N")
                                .addClass( "kl_CLICK" );
                            $(".elel_N")[0].setAttribute('onclick', 'klawisz_0()');
                            $(".elel_N")[1].setAttribute('onclick', 'klawisz_1()');
                            $(".elel_N")[2].setAttribute('onclick', 'klawisz_2()');
                            $(".elel_N")[3].setAttribute('onclick', 'klawisz_3()');
                            $(".elel_N")[4].setAttribute('onclick', 'klawisz_4()'); 
                            // ElementyMenu($(this), $(this).parent() );                        
                        }); 
                       // ElementyMenu($(this), $(this).parent() );                        
                });
          });
  });
  
function klawisz_0() {
    klawiszeOFF_przestrzenON();
    $(".kl_przestrzen_Tytul").text("Jan R.J.S. Cisowski Sas");
    $(".kl_pusteLinie").show();

}
  
function klawisz_1() {
    klawiszeOFF_przestrzenON();
    $(".kl_przestrzen_Tytul").text("Metoda");
    $(".kl_pusteLinie").show();

}

function klawisz_2() {
    klawiszeOFF_przestrzenON();
    $(".kl_przestrzen_Tytul").text("Przyszła Aplikacja");
    $(".kl_pusteLinie").show();

}

function klawisz_3() {
    klawiszeOFF_przestrzenON();
    $(".kl_przestrzen_Tytul").text("Nazwy Stosunków");
   $(".kl_pusteLinie").show();

}

  
function klawisz_4() {
    klawiszeOFF_przestrzenON();
    $(".kl_przestrzen_Tytul").text("Historia");
    $(".kl_przestrzen_kontener")
        .append("<div id='hist1' class='hist1234'></div>")
        .append("<div id='hist2' class='hist1234'></div>")
        .append("<div id='hist3' class='hist1234'></div>")
        .append("<div id='hist4' class='hist1234'></div>");
    $("#hist1")
        .append("<h2>Aitzinger</h2>")
        .append("<h5><b>(Michael  von Aitzing Freiherr; vel. Eitzing vel. Eytzinger)</b></h5>")
        .append("<p> — jako pierwszy w 1590 zaprezentował matematyczną numerację przodków, w książce <b>„Thesaurus principum hac aetate in Europa viventium”></b> <i>(Kolonia : Gottfried von Kempen, 1590)</i> o książęcych i królewskich domach Europy.</p>")
        .append("<br><hr><br>")
        .append("<p>(ur. w 1530 w Obereitzing* [wzgórze na którym stoi zamek Panów Eitzing, ob. Gmina Eitzing w kraju Górnej Austrii] i zm. W 1598 w Bonn* [ob. Miasto w kraju Nadrenia Północnej-Westfalli], był austriackim szlachcicem, dyplomatą, historykiem i pisarzem.)</p>")
        .append("<br><hr><br>");
    $("#hist2")
        .append("<h2>Sosa</h2>")
        .append("<h5>(Jerónimo de Sosa)</h5>")
        .append("<p> — w 1676 w swej genealogicznej pracy <b>„Noticia de la gran Casa de los Marqueses de Villafranca”</b>, przywołał i wykorzystał metodę numerowania przodków Michela Aitzinger, przyczyniając się tym samym do jej popularyzacji.</p>")
        .append("<br><hr><br>")
        .append("<p>(hiszpański zakonnik franciszkański i genealog z XVII w., był czytelnikiem teologii w klasztorze św. Marii w Neapolu.)</p>")
        .append("<br><hr><br>");
    $("#hist3")
        .append("<h2>Stradonitz</h2>")
        .append("<h5>(Stephan Kekulé von Stradonitz) </h5>")
        .append("<p> — w 1898 w swojej publikacji <b>„Ahnentafel-Atlas. Ahnentafeln zu 32 Ahnen der Regenten Europas und ihrer Gemahlinnen”</b> <i>(Berlin : J. A. Stargardt, 1898-1904)</i>, popularyzował i wykorzystał matematyczną metodę numerowania przodków, stworzoną przez Eyzingera i sugerowaną przez Sosa. Atlas zawiera 79 wykresów rodowych suwerenów europejskich lub ich małżonków.</p>")
        .append("<p>Za sprawą jegoż popularyzacji ta metoda stała się powszechna i znana jako system Sosa-Stradonitza.</p>")
        .append("<br><hr><br>")
        .append("<p>(ur. 1 V 1863 w Gandawie* [Flamandzkie Miasto], zm. 5 V 1933 w Berlinie, był niemieckim prawnikiem, heraldykiem i genealogiem. Był też synem znanego chemika Friedricha Augusta Kekulé von Stradonitz, z szlacheckiej czeskiej rodziny i jego żony Stéphanie Drory, z Gandawy)</p>")
        .append("<br><hr><br>");
    $("#hist4")
        .append("<h2>Cisowski</h2>")
        .append("<h5>(Jan Roman Jerzy S. Sas Cisowski)</h5>")
        .append("<p> — w 2017 zaproponował spójne matematyczne rozszerzenie systemu numeracji  Aitzinger, pozwalajace metodą pozycyjno-relacyjną, określić już nie tylko przodków jak u poprzedników, ale dowolną osobę która w jakikolwiek spoób jest połłączona z probantem. </p>")
        .append("<p>Metoda ta posiada szereg przekształceń matematycznych pozwalajacych w łatwy sposób określić stopień pokrewieństwa prawnego, genetycznego, a także łatwo określić w którym pokoleniu i po jakiej linii, ktoś jest z nami związany, a także przy pewnych dodatkowych założeniach łatwo określić nazwe stosunku z daną osobą, a także dowiedzieć się czy z daną osobą mamy wspólną cząstke Y-DNA, X-DNA, mtDNA i atDNA.</p>")
        .append("<br><hr><br>")
        .append("<p>(ur. 1990 w Krakowie, syn znanego polskiego konstruktora samolotów Jerzego Cisowskiego z Tarnowa, i matematyczki Jadwigi Ochot z Mysłowic.</p>")
        .append("<p>Od 1999(2001) genealog, początkowo badacz własnych korzeni, obecnie badacz genealogiczno-genetyczno-demograficzny, stosunków i zależności pomiędzy wszystkimi* mieszkańcami, wybranych miejscowości.)</p>")
        .append("<br><hr><br>");
}

function klawiszeOFF_przestrzenON() {
    $(".kl_przestrzen").fadeIn().removeClass("kl_niewiedzialne");
    $(".kl_pusteLinie").hide();
    $(".elel_N")        
        .fadeOut(1000, function() {
            $(this).addClass("kl_niewiedzialne");
            //$(".kl_przestrzen_FULL").addClass("kl_CLICK").removeClass("kl_niewiedzialne");                    
            $(".kl_przestrzen_czerwonyX")
                .addClass("kl_CLICK")
                .removeClass("kl_niewiedzialne"); 
              //  $(".kl_przestrzen_czerwonyX").setAttribute('onclick', 'klawisz_0()');                                  
            // ElementyMenu($(this), $(this).parent() );                        
        });    
    
    //$(".kl_przestrzen").removeClass("kl_niewiedzialne");
    

    
   
} 
function klawiszeON_przestrzenOFF() {
    $(".elel_N").fadeIn().removeClass("kl_niewiedzialne"); 
    $(".kl_przestrzen")        
    .fadeOut(1000, function() {
        $(this).addClass("kl_niewiedzialne");                  
        $(".kl_przestrzen_czerwonyX")
            .removeClass("kl_CLICK")
            .addClass("kl_niewiedzialne"); 
        //$(".kl_przestrzen_FULL").removeClass("kl_CLICK").addClass("kl_niewiedzialne"); 
        $(".hist1234").remove();
           // $(".kl_przestrzen_czerwonyX").removeAttribute('onclick', 'klawisz_0()');
                                                   
        // ElementyMenu($(this), $(this).parent() );                        
    }); 
   // toggleFullscreen();
    $(".kl_pusteLinie").hide();
}


// mozfullscreenerror event handler
function errorHandler() {
    alert('mozfullscreenerror');
 }
 document.documentElement.addEventListener('mozfullscreenerror', errorHandler, false);
 
 // toggle full screen
 function toggleFullScreen() {
   if (!document.fullscreenElement &&    // alternative standard method
       !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
     if (document.documentElement.requestFullscreen) {
       document.documentElement.requestFullscreen();
     } else if (document.documentElement.mozRequestFullScreen) {
       document.documentElement.mozRequestFullScreen();
     } else if (document.documentElement.webkitRequestFullscreen) {
       document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
     }
   } else {
     if (document.cancelFullScreen) {
       document.cancelFullScreen();
     } else if (document.mozCancelFullScreen) {
       document.mozCancelFullScreen();
     } else if (document.webkitCancelFullScreen) {
       document.webkitCancelFullScreen();
     }
   }
 }
 
 // keydown event handler
 document.addEventListener('keydown', function(e) {
   if (e.keyCode == 13 || e.keyCode == 70) { // F or Enter key
     toggleFullScreen();
   }
 }, false);












function puste_linie(param1, param2) {
    let i = 0;
    do {
        i++
        $(param2)
            .append("<p class='kl_pusteLinie'>" + i + "</p>")
            .prepend("<p class='kl_pusteLinie'>" + i + "</p>");
       // $(".kl_pusteLinie").hide();
    } while (i < param1);
    }
// .append("<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>")
// .append("<circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />")
// .append("<path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' /></svg>");
/*
.append("<svg viewBox='0 0 95 50' xmlns='http://www.w3.org/2000/svg'>")    
.append("<g stroke='green' fill='white' stroke-width='5'>")  
.append("<circle cx='25' cy='25' r='15'/>")  
.append("<circle cx='40' cy='25' r='15'/>") 
.append("<circle cx='55' cy='25' r='15'/>") 
.append("<circle cx='70' cy='25' r='15'/>") 
.append("</g>").append("</svg>");*/

/*
$("body")
.append("<div><svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>")
.append("<circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />")
.append("<path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' />")
.append("</svg></div>");

*/



