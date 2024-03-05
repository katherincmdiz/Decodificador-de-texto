const campoTexto = document.querySelector("#ingresoTexto");
const campoMensaje = document.querySelector("#mensajeEncriptador");
const matrizCodigo = [
    ["e", "enter"],
    ["i","imes"],
    ["a", "ai"],
    ["u", "ufat"],
    ["o", "ober"]];

const validar = /^[a-z ñ\s]+$/;

function btnEncriptar() {
    if (campoTexto.value === "" || campoTexto.length === 0){
        Swal.fire({
            title: "Error",
            text: "El mensaje esta vacio",
            icon: "question",
          });
    } else {
        if (validar.test(campoTexto.value)){
            const textoNuevo = encriptar(campoTexto.value);
            return campoMensaje.value = textoNuevo;
        }else {
            return Swal.fire({
                title: "Error",
                text: "No se permite mayúsculas ni acentos",
                icon: "error",
              });
        }  
        }
    }
function encriptar(fraseEncriptada){
    for (let i = 0; i < matrizCodigo.length; i++){
        if (fraseEncriptada.includes(matrizCodigo[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
        document.getElementById("ingresoTexto").value = "";
    }
    cambiosElementos();
    return fraseEncriptada;
}
function btnDescencriptar(){
    if (campoTexto.value === "" || campoTexto.length === 0){
        Swal.fire({
            title: "Error",
            text: "El mensaje esta vacio",
            icon: "question",
          });
    } else {
        if (validar.test(campoTexto.value)){
            const textoNuevo = descencriptar(campoTexto.value);
            return campoMensaje.value = textoNuevo;
        }else {
            return Swal.fire({
                title: "Error",
                text: "No se permite mayúsculas ni acentos",
                icon: "error",
              });
        }  
        }
    }

    /*const textoNuevo = descencriptar(campoTexto.value);
    campoMensaje.value = textoNuevo;*/


function descencriptar( fraseDescencriptada){
    for (let i = 0; i < matrizCodigo.length; i++){
        if (fraseDescencriptada.includes(matrizCodigo[i][0])){
            fraseDescencriptada = fraseDescencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    document.getElementById("ingresoTexto").value = "";
    cambiosElementos();
    return fraseDescencriptada;
}


function cambiosElementos() {
    document.getElementById("imagenBuscador").style.display = "none";
    document.getElementById("parrafoMensaje").style.display = "none";
    document.getElementById("botonCopiar").style.display = "block";
    document.getElementById ("descifrar").classList.add("ajustar");
    document.getElementById("mensajeEncriptador").classList.add("ajustar");
    return;
}

function copiar() {
    if (mensajeEncriptador.value === "" || mensajeEncriptador.length === 0){
        Swal.fire({
            title: "Error",
            text: "El mensaje esta vacio",
            icon: "question",
          });
    } else {
    let textoNuevo = mensajeEncriptador;
    navigator.clipboard.writeText(textoNuevo.value); 
    console.log(textoNuevo.value)
    /*alert("texto copiado con éxito");*/
    Swal.fire({
        title: 'copiado',
        text: '¡Texto copiado con éxito!',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    document.getElementById("mensajeEncriptador").value = "";
    return; 
}
}























 /* es una opcion si quiero mostrar todo los elementos de campo decifrar otra vez*/
    /*document.getElementById("imagenBuscador").style.display = "block";*/
    /*document.getElementById("parrafoMensaje").style.display = "block";*/
    /*document.getElementById("botonCopiar").style.display = "none";*/
    /*document.getElementById ("descifrar").classList.remove("ajustar");*/
    /*document.getElementById("mensajeEncriptador").classList.remove("ajustar");*/

 


  


    
    









