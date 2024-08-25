
let claveEncriptacion = 1234

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
    asignarTextoElemento (".contenido__principal__resultado__titulo", "Ningún mensaje fue encontrado");
    asignarTextoElemento (".contenido__principal__resultado__info", "Ingresa el texto que desees encriptar o desencriptar.");
    asignarImagenElemento (".contenido__principal__resultado__imagen", "./assets/decode.png");

    let imagen = document.querySelector(".contenido__principal__resultado__imagen"); // cuando use Encriptar en el textarea vacia
    imagen.style.width = "40%"; 
    imagen.style.height = "40%";   
}

function encriptar(){    
    let textoUsuario = document.getElementById('textoUsuario').value;

    if (textoUsuario == ""){
        condicionesIniciales();
    }     
    else {

        let encriptado = btoa(textoUsuario)
        

        asignarTextoElemento (".contenido__principal__resultado__titulo", "");
        asignarTextoElemento (".contenido__principal__resultado__info", encriptado);
        
        let imagen = document.querySelector(".contenido__principal__resultado__imagen"); 
        imagen.style.width = 0;   
        imagen.style.height = 0;  
    }
    return;
    

}


function desencriptar(){
     
    let textoUsuario = document.getElementById('textoUsuario').value;

    if (textoUsuario == ""){
        condicionesIniciales();
    }     
    else {

        let desencriptado = atob(textoUsuario)
        

        asignarTextoElemento (".contenido__principal__resultado__titulo", "");
        asignarTextoElemento (".contenido__principal__resultado__info", desencriptado);
        
        let imagen = document.querySelector(".contenido__principal__resultado__imagen"); 
        imagen.style.width = 0;   
        imagen.style.height = 0;  
    }
    return;
    

}


function copiar() {
 
    // se obtiene el valor del elemento con esta clase, un parrafo en este caso
    let textoCopiado = document.querySelector(".contenido__principal__resultado__info").textContent;
  
    let temporal = document.createElement("textarea"); // contenedor temporal que no se vera
    temporal.value = textoCopiado; // se asigna como valor del contenedor el texto copiado
    document.body.appendChild(temporal); // se agrega al body del documento para que sea seleccionado y copiado mas adelante

    temporal.select(); // selecciona el valor del contenedor temporal
    navigator.clipboard.writeText(temporal.value); // se copia ese valor al portapapeles
    document.body.removeChild(temporal); // eliminar el elemento temporal

    alert("Texto copiado: " + textoCopiado);
  }



condicionesIniciales();