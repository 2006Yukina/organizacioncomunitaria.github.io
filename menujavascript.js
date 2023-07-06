'use strict'
const iconoMenu = document.querySelector('#icono-menu'),
menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) =>{

    //Alternamos estilos para el menu y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    /*Alternamos su atributo 'src' para el icono del menú
    const rutaActual = e.target.getAttribute('href');

    if(rutaActual == 'menu.png'){
        e.target.setAttribute();
    }else{
        e.target.setAttribute();
    }*/

});

function cambia(n,r){
    if (r=="si"){
        document.getElementById(n).style.background="#99A3A4" 
    }else{
        document.getElementById(n).style.background=""
    }
}
