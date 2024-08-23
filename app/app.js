
function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return; 
}

function asignarImagenElemento(elemento, ruta){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.src = ruta; 
    return;
}

function condicionesIniciales(){
    asignarTextoElemento ("h1", "Prueba 2");
    asignarTextoElemento ("p", "Prueba parrafo");
    asignarTextoElemento (".contenido__principal__resultado__titulo", "Prueba parrafo3");
    asignarTextoElemento (".contenido__principal__resultado__info", "Prueba parrafo4");
    asignarTextoElemento (".contenido__principal__condicion", "Prueba parrafo5");
    asignarImagenElemento (".contenido__principal__resultado__imagen", "assets/x.png");
    
}

function encriptar(){
    let textoUsuario = document.getElementById('textoUsuario').value;
    asignarTextoElemento (".contenido__principal__resultado__titulo", "");
    asignarTextoElemento (".contenido__principal__resultado__info", "texto encriptado");
    
    let imagen = document.querySelector(".contenido__principal__resultado__imagen"); 
    imagen.style.width = "1px";   
    imagen.style.height = "1px";  
    
    console.log(textoUsuario);
    return;

}



condicionesIniciales();