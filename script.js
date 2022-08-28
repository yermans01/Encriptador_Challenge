// esta funcion toma los valores ingresados en la caja1 y los encripta
function encriptar() {
//conseguimos el valor del txt-input
    let texto = document.getElementById("txt-input").value;
//remplazamos las vocales
// g, modificador hace una busqueda global G para encontrar las vocales
    let encriptado = texto.replace(/[e]/g,'enter').replace(/[i]/g,'imes').replace(/[a]/g,'ai').replace(/[o]/g,'ober').replace(/[u]/g,'ufat');
    
    //se consulta si es campo esta vacio 
    if (texto == "") { 
        alert("Por Favor, Ingresa una palabra");
    }
//consulto NO hay mayusculas, que ingrese el valor a encriptado
    if(/([^a-z\ñ\s])/g.test(texto) === false) {
        mensaje.style.backgroundImage = "none"
        document.getElementById("mensaje").value = encriptado;
//se limpia el texto
        document.getElementById("txt-input").value = "";
        mensaje.style.backgroundImage="none";
    }else{
        alert("Ingrese letras Minúsculas sin Acentos");
    }
}

function desencriptar() {
// conseguir los datos de ipt-texto
    let texto = document.getElementById("txt-input").value;
//reemplaza los varoles
    let desencriptar = texto.replace(/ai/g,'a').replace(/enter/g,'e').replace(/imes/g,'i').replace(/ober/g,'o').replace(/ufat/g,'u');
//damos el valor a mensaje
    document.getElementById("mensaje").value = desencriptar;
//limpiar texto del input
    document.getElementById("txt-input").value = "";
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value="";
    alert("texto copiado")
}