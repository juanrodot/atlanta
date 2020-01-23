$(document).ready(function(){
    
    $(window).scroll(function(){
        var barra = $(window).scrollTop();
        var posicion = barra *0.10;
        $('.portada').css({
            'background-position-y': '0 -' + posicion + 'px'
        });
    });
});
