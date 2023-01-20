var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".muneco");
var aviso1 = document.querySelector(".div-aviso");
var aviso2 = document.querySelector(".div-parrafo");
var tapar = document.querySelector(".tapar");
var escribir = document.querySelector(".text-area");
var resultado = document.querySelector(".text-resultado");

function recuperarTexto(){
  return escribir.value;
}

function ocultarMuneco(){
  muneco.classList.add("ocultar");
  aviso1.classList.add("ocultar");
  aviso2.classList.add("ocultar");
  tapar.classList.add("ocultar");
}

function encriptarTexto(mensaje){
  var texto = recuperarTexto();
  var textoFinal = "";

  for(var i = 0; i < texto.length; i++){
    if(texto[i] == "a"){
      textoFinal = textoFinal + "ai"
    }
    else if(texto[i] == "e"){
      textoFinal = textoFinal + "enter"
    }
    else if(texto[i] == "i"){
      textoFinal = textoFinal + "imes"
    }
    else if(texto[i] == "o"){
      textoFinal = textoFinal + "ober"
    }
    else if(texto[i] == "u"){
      textoFinal = textoFinal + "ufat"
    }
    else{
      textoFinal = textoFinal + texto[i];
    }

  }
  return textoFinal;
}

function desencriptarTexto(mensaje){
  var texto = recuperarTexto();
  var textoFinal = "";

  for(var i = 0; i < texto.length; i++){
    if(texto[i] == "a"){
      textoFinal = textoFinal + "a"
      i = i+1;
    }
    else if(texto[i] == "e"){
      textoFinal = textoFinal + "e"
      i = i+4;
    }
    else if(texto[i] == "i"){
      textoFinal = textoFinal + "i"
      i = i+3;
    }
    else if(texto[i] == "o"){
      textoFinal = textoFinal + "o"
      i = i+3;
    }
    else if(texto[i] == "u"){
      textoFinal = textoFinal + "u"
      i = i+3;
    }
    else{
      textoFinal = textoFinal + texto[i];
    }

  }
  return textoFinal;
}

function encriptar(){
  ocultarMuneco();
  resultado.textContent = encriptarTexto(recuperarTexto);
  
}

function desencriptar(){
  ocultarMuneco();
  resultado.textContent = desencriptarTexto(recuperarTexto);
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".text-resultado").textContent;
    navigator.clipboard.writeText(contenido);
})