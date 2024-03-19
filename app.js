let numeroSecreto=0;
let intentos=0;
let listaNumSorteados=[];
let numeroMax=10;
//console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
function verificarIntento(){
    let numUsuario=parseInt(document.getElementById('valorUsuario').value);
    if(numUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1)?'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero es menor');
        } else{
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    let valorCaja=document.querySelector('#valorUsuario');
    valorCaja.value='';
    return;
}
function generarNumeroSecreto(){
    let numeroGenerado=parseInt(Math.floor(Math.random()*numeroMax)+1);
    if(listaNumSorteados.length==numeroMax){
        asignarTextoElemento('p','Ya se sortearon todos los numeros');
    }else{
        if(listaNumSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            }else{
                listaNumSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
    }
    
    
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p','Escoge un numero entre 1 y '+numeroMax+':');
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego(){
    //limpiar la caja, indicar mensaje de intervalo de numeros, generar el numero aleatorio, deshabilitar el boton, reiniciar intentos
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    

}


/*
function saludo(){
    console.log('Hola mundo');
}
function saludo2(nombre){
    console.log(`Hola, ${nombre}!`);
}
function doble(numero){
    console.log(`El doble de ${numero} es: ${parseInt(numero)*2}!`);
}
function mayor(numero1, numero2){
    console.log(`El mayor es: ${parseInt(numero1)>parseInt(numero2)?numero1:numero2}!`);
}
function cuadrado(numero){
    console.log(`El cuadrado de ${numero} es: ${parseInt(numero)*parseInt(numero)}!`);
}
function calculoIMC(altura, peso){
    let imc=peso/(altura^2);
    console.log(imc);
    return;
}
function factorial(numero){
    let fact=numero;
    while(numero>=2){
        console.log(fact);
        fact=fact*(numero-1);
        numero--;
        
    }
    return;
}
function conversorMoneda(moneda){
    let dolar=16.82;
    let pesos=moneda*dolar;
    console.log(pesos);
    return;
}
function AyPRectangulo(ancho,alto){
    let area=ancho*alto;
    let perimetro=ancho*2+alto*2;
    console.log(`El area del rectangulo es ${area} u^2 y el perimetro es ${perimetro} u`);
    return;
}
function AyPCirculo(radio){
    let area=Math.PI*Math.pow(radio,2);
    let perimetro=Math.PI*radio*2;
    console.log(`El area del circulo es ${area} u^2 y el perimetro es ${perimetro} u`);
    return;
}
function tabMult(numero){
    let base=numero;
    let contador=1;
    while(contador<=10){
        console.log(`${base} * ${contador} = ${base*contador}`);
        contador++;
    }
    return;
    
}
*/
condicionesIniciales();