var NC=+prompt("Ingrese N° de cita")
var CC
if (NC<=3){
    CC=200
    TOT=NC*CC
}else if(NC<=5){
    CC=150
    TOT=(NC-3)*CC+600
}else if(NC<=8){
    CC=100
    TOT=(NC-5)*CC+900
}else if(NC>8){
    CC=50
    TOT=(NC-8)*CC+1200
}else{
    console.log("Has ingresado un dato inválido")
}
var final=TOT-CC
console.log("Por esta cita debes pagar:" + CC+ " soles")
console.log("Hasta ahora has pagado "+ final+ " soles sin considerar la consulta de hoy")