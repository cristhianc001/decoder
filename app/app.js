
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
    asignarTextoElemento (".contenido__principal__resultado__titulo", "Prueba parrafo3");
    asignarTextoElemento (".contenido__principal__resultado__info", "Prueba parrafo4");
    asignarTextoElemento (".contenido__principal__condicion", "Prueba parrafo5");
    asignarImagenElemento (".contenido__principal__resultado__imagen", "assets/x.png");
    
}

function encriptar(){
     
    let textoUsuario = document.getElementById('textoUsuario').value;
    let encriptado = btoa(textoUsuario)
    
    


    asignarTextoElemento (".contenido__principal__resultado__titulo", "");
    asignarTextoElemento (".contenido__principal__resultado__info", encriptado);
    
    let imagen = document.querySelector(".contenido__principal__resultado__imagen"); 
    imagen.style.width = "1px";   
    imagen.style.height = "1px";  

    return;
    

}


function desencriptar(){
     
    let textoUsuario = document.getElementById('textoUsuario').value;
    let desencriptado = atob(textoUsuario)
    
    


    asignarTextoElemento (".contenido__principal__resultado__titulo", "");
    asignarTextoElemento (".contenido__principal__resultado__info", desencriptado);
    
    let imagen = document.querySelector(".contenido__principal__resultado__imagen"); 
    imagen.style.width = "1px";   
    imagen.style.height = "1px";  

    return;
    

}


function copiar() {
    // Get the text field
    let textoCopiado = document.getElementById(".contenido__principal__resultado__info");
  
    // Select the text field
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(textoCopiado.value);
    
    // Alert the copied text
    alert("Copied the text: " + textoCopiado.value);
  }



condicionesIniciales();