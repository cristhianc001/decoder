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
    asignarTextoElemento (".contenido__resultado__final", "");
    asignarTextoElemento (".contenido__resultado__titulo", "Ningún mensaje fue encontrado");
    asignarTextoElemento (".contenido__resultado__info", "Ingresa el texto que desees encriptar o desencriptar.");
    asignarImagenElemento (".contenido__resultado__imagen", "./assets/decode.png");

    let imagen = document.querySelector(".contenido__resultado__imagen"); // cuando use Encriptar en el textarea vacia
    imagen.style.width = "20%"; 
    imagen.style.height = "30%";   
}

function encriptar(){    
    let textoUsuario = document.getElementById('textoUsuario').value;

    if (textoUsuario == ""){
        condicionesIniciales();
    }     
    else {
        // booleanos
        const tieneMayusculas = /[A-Z]/.test(textoUsuario);
        const tieneAcentos = /[áéíóúüñ]/.test(textoUsuario);
        const tieneCaracteresEspeciales = /[^a-zA-Z0-9\s]/.test(textoUsuario);
        
        if (tieneMayusculas || tieneAcentos || tieneCaracteresEspeciales){
            alert("El texto contiene mayúsculas, acentos o caracteres especiales. Use el boton Procesar.");
        }
        
        else{
            let encriptado = textoUsuario
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    
            asignarTextoElemento (".contenido__resultado__titulo", "");
            asignarTextoElemento (".contenido__resultado__info", "");
            asignarTextoElemento (".contenido__resultado__final", encriptado);
            
            let imagen = document.querySelector(".contenido__resultado__imagen"); 
            imagen.style.width = 0;   
            imagen.style.height = 0;     
        }
        

    }
    return;

}


function desencriptar(){
    let textoUsuario = document.getElementById('textoUsuario').value;

    if (textoUsuario == ""){
        condicionesIniciales();
    }     
    else {
        // booleanos
        const tieneMayusculas = /[A-Z]/.test(textoUsuario);
        const tieneAcentos = /[áéíóúüñ]/.test(textoUsuario);
        const tieneCaracteresEspeciales = /[^a-zA-Z0-9\s]/.test(textoUsuario);

        if (tieneMayusculas || tieneAcentos || tieneCaracteresEspeciales){
            alert("El texto contiene mayúsculas, acentos o caracteres especiales. Use el boton Procesar.");
        }
        
        else {
            let desencriptado = textoUsuario
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        
            asignarTextoElemento (".contenido__resultado__titulo", "");
            asignarTextoElemento (".contenido__resultado__info", "");
            asignarTextoElemento (".contenido__resultado__final", desencriptado);
            
            let imagen = document.querySelector(".contenido__resultado__imagen"); 
            imagen.style.width = 0;   
            imagen.style.height = 0;  
        }
        
   
    }
    return;
}

function procesar(){
     
    let textoUsuario = document.getElementById('textoUsuario').value;

    if (textoUsuario == ""){
        condicionesIniciales();
    }     
    else {

        let textoMinusculas = textoUsuario.toLowerCase();
        let textoSinAcentos = textoMinusculas.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let textoSinCaracteresEspeciales = textoSinAcentos.replace(/[^a-zA-Z0-9\s]/g, "");
        document.getElementById('textoUsuario').value = textoSinCaracteresEspeciales;

        asignarTextoElemento (".contenido__resultado__final", ""); 
        asignarTextoElemento (".contenido__resultado__titulo", "El texto ha sido procesado");
        asignarTextoElemento (".contenido__resultado__info", "Continue con la transformacion");

    }
    return;
}


function copiar() {
 
    // se obtiene el valor del elemento con esta clase, un parrafo en este caso
    let textoCopiado = document.querySelector(".contenido__resultado__final").textContent;
  
    if (textoCopiado == "") {
        alert("No hay texto disponible");
    }
    else {
        let temporal = document.createElement("textarea"); // contenedor temporal que no se vera
        temporal.value = textoCopiado; // se asigna como valor del contenedor el texto copiado
        document.body.appendChild(temporal); // se agrega al body del documento para que sea seleccionado y copiado mas adelante

        temporal.select(); // selecciona el valor del contenedor temporal
        navigator.clipboard.writeText(temporal.value); // se copia ese valor al portapapeles
        document.body.removeChild(temporal); // eliminar el elemento temporal

        alert("Texto copiado: " + textoCopiado);
    }
  }



condicionesIniciales();