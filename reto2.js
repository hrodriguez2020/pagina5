
var TI=prompt("ingrese el tipo de hamburguesa sencillo(S), dobles(D), o triples(T")
var N=+prompt("ingrese cantidad de hamburguesas")
var TP=prompt("ingrese tipo de pago: Efectivo(E) o Tarjeta(T)")
var PA
var CA=1.05
var TO
var TOT
if (TI=="S"){
    PA=20
}else if(TI=="D"){
    PA=25
}else if(TI=="T"){
    PA=28
}else{
    console.log("Has ingresado un tipo de hamburguesa inválida")
    PA=0
}

if (TP=="T"){
    TO=N*PA
    TOT=TO*CA
}else if(TP=="E"){
    TO=N*PA
    TOT=TO
}else{
    console.log("Has escogido una opción de pago inválido")
}

console.log("El total a pagar es de: "+TOT+" soles")