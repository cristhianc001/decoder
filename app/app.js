
function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return; 
}

function condicionesIniciales(){
    asignarTextoElemento ("h1", "Prueba 2");
    asignarTextoElemento ("p", "Prueba parrafo");
    asignarTextoElemento (".message-title", "Prueba parrafo3");
    asignarTextoElemento (".message-text", "Prueba parrafo4");
    asignarTextoElemento (".condicion", "Prueba parrafo5");
    
}


condicionesIniciales();