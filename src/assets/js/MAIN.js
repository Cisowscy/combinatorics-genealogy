let tytulStrony1 = "Kombinatoryka Genealogiczna";
let tytulStrony2 = "Metoda Numeracji Aitzinger`a - Cisowski`ego";

//wymiary
$(function () {
    $("body")
        .prepend("<p class='kl_stylElemetu' id='wymiary'></p>")
        .append("<button id='div0' class='kl_niewiedzialne elel_N elel_1'></button>")
        .append("<button id='div1' class='kl_niewiedzialne elel_N elel_4'></button>")
        .append("<button id='div2' class='kl_niewiedzialne elel_N elel_4'></button>")
        .append("<button id='div3' class='kl_niewiedzialne elel_N elel_4'></button>")
        .append("<button id='div4' class='kl_niewiedzialne elel_N elel_4'></button>");
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
});

function pozycja_el() {
    let rem7 = 7*16;
    let rem9 = 9*16;
    let rem41 = 28*16;
    let Hq = ($("body").innerWidth()/4);
    let Vq = ($("body").innerHeight()/4);
    //if (rem41+rem9>)
    $("#div0")
        .css({
            left: Math.floor(2*Hq-rem41/2), 
            top: Math.floor(2*Vq-rem7/2)
        });
    $("#div1")
        .css({
            left: Math.floor(3*Hq-rem9/2), 
            top: Math.floor(Vq-rem7/2)
        });
    $("#div2")
        .css({
            left: Math.floor(3*Hq-rem9/2), 
            top: Math.floor(3*Vq-rem7/2)
        });
    $("#div3")
        .css({
            left: Math.floor(Hq-rem9/2), 
            top: Math.floor(3*Vq-rem7/2)
        });
    $("#div4")
        .css({
            left: Math.floor(Hq-rem9/2), 
            top: Math.floor(Vq-rem7/2)
        });
    
}
$.when( $.ready ).then(function() {
    
    // Document is ready.
    $("#div0")        
        .fadeOut(2000, function() {
            $(".elel_4").fadeOut(); 
            $(this)
                .removeClass( "kl_niewiedzialne" )
                .fadeIn(4000, function() {
                    $(this)
                        .addClass( "kl_CLICK" ); 
                    $(".elel_4")
                        .removeClass( "kl_niewiedzialne" )
                        .fadeIn(4000, function() {
                            $(this)
                                .addClass( "kl_CLICK" );                             
                            // ElementyMenu($(this), $(this).parent() );                        
                        }); 
                       // ElementyMenu($(this), $(this).parent() );                        
                });
          });
  });

/*
 
    let wx = 650;
    let hy = 150;
    let lx = Math.floor(xy[0]-wx/2);
    let ty = Math.floor(xy[1]-hy/2);
    $("#div1")
        .addClass("kropka")
        .css({
            width: wx, height: hy, left: lx, top: ty 
        });
    

*/



$("body")
    .append("<button class='kl_head kl_niewiedzialne kl_stylElemetu'></button>")
    .append("<div class='kl_nav'></div>");
   // .append("<div class='kl_main niewiedzialne'></div>")
   // .append("<div class='kl_footer niewiedzialne'></div>");
/*

$(".kl_main")
    .append("<div class='kl_nav'></div>")
    .append("<div class='kl_article'></div>")
    .append("<div class='kl_aside'></div>"); */



new Tether({
    element: '.kl_head',
    target: document.body,
    attachment: 'middle center',
    targetAttachment: 'middle center',
    targetModifier: 'visible'
});

/* ########################################################################## */


  $( window ).resize(function() {
    xw = $(window).width() / 2;
    yw = $(window).height() / 2;
    xd = $(document).width() / 2;
    yd = $(document).height() / 2;
  });
function ElementyMenu(tytul, kontener) {
    kontener.prepend("<button class='kl_ElementyMenu kl_stylElemetu kl_CLICK kl_el_butt1'></button>");    
    kontener.prepend("<button class='kl_ElementyMenu kl_stylElemetu kl_CLICK kl_el_butt2'></button>");
    kontener.append("<button class='kl_ElementyMenu kl_stylElemetu kl_CLICK kl_el_butt3'></button>");
    kontener.append("<button class='kl_ElementyMenu kl_stylElemetu kl_CLICK kl_el_butt4'></button>");
    
    new Tether({
        element: '.kl_el_butt4',
        target: document.body,
        attachment: 'top left',
        targetAttachment: 'middle center',
        //targetModifier: 'visible',
        //offset: '0 10px',
        //targetOffset: '60px 0'
    });
    new Tether({
        element: '.kl_el_butt3',
        target: document.body,
        attachment: 'top right',
        targetAttachment: 'middle center',
       // targetModifier: 'visible',
        //offset: '0 10px',
        //targetOffset: '60px 0'
    });
    new Tether({
        element: '.kl_el_butt1',
        target: document.body,
        attachment: 'bottom left',
        targetAttachment: 'middle center',
       // targetModifier: 'visible',
        //offset: '0 10px',
        //targetOffset: '-110px 0'
    });
    new Tether({
        element: '.kl_el_butt2',
        target: document.body,
        attachment: 'bottom right',
        targetAttachment: 'middle center',
       // targetModifier: 'visible',
        //offset: '0 100px',
        //targetOffset: '-60px 0'
    });
}
/*


*/
//$( ".kl_head" ).hide().show({ effect: "scale", origin: [ "middle", "center" ], direction: "horizontal" });


/*
$("body").click(function () {
    $(".kl_head")
        .toggle("fade");
});
*/








puste_linie(25, ".kl_main");

$(".kl_pusteLinie")
    .css({
        color: 'black'
    })
    .css({
        background: 'rgba(255, 0, 0, 0.096)'
    })
    .show(3000);
/*
new Tether({
    element: '.kl_head',
    target: '.kl_nav',
    attachment: 'top center',
    targetAttachment: 'bottom center',
    constraints: [
        {
          to: 'scrollParent',
          attachment: 'together',
          pin: true
        }
      ]
}); */
function puste_linie(param1, param2) {
    let i = 0;
    do {
        i++
        $(param2)
            .append("<p class='kl_pusteLinie'>" + i + "</p>")
            .prepend("<p class='kl_pusteLinie'>" + i + "</p>");
        $(".kl_pusteLinie")
            .hide();
    } while (i < param1);
}
/*

 id='id_pustaLinia'
$( "head" ).append( "<p>rrrrr</p>" );




    */
