/*Identificamos y almacenamos el id slider en una variable*/
var slider=$('#slider');
/*Realizamos lo mismo con los botones*/
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');
/*Vamos a mover la última imagen en la primera posición*/
$('#slider section:last').insertBefore('#slider section:first');
//mostramos la primera imagen de -100%
slider.css('margin-left', '-'+100+'%');
//Programamos un método que ayude a deslizar a la derecha
function moverD(){
    slider.animate({marginLeft:'-'+200+'%'}, 700, function(){
        $('#slider section:first').insertAfter('#slider section:last');
        slider.css('margin-left','-'+100+'%');
    });
}//Fin del método moverD
function moverI(){
    slider.animate({marginLeft:0}, 700, function(){
        $('#slider section:last').insertBefore('#slider section:first');
        slider.css('margin-left','-'+100+'%');
    });
}//Fin del método moverI
siguiente.on('click', function(){
    moverD();
});
anterior.on('click', function(){
    moverI();
});

function reproducir(){
    intervalo=setInterval(function(){
        moverD();
    },5000);
}
reproducir();