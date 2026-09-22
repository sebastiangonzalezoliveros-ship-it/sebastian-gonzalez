// condicinale  con js (if, else, else if,)
//declaracion de variables

let hambre = true;

//condicional (preguntar)
//simpre y cuando la (condicion) se cumple, 
if (hambre == true) {
    console.log("tengo hambre, voy a comer");
}  else { //si la (condicion) no se cumple
     //se ejecutara el bloque de codigo de las llaves { 
 console.log("no tengo hambre, voy a dormir");  

}

let promediofinal = 4.0;

if (promediofinal >= 3.5) {
    console.log("Reprobaste la materia,");
} else if (promediofinal >= 4.0) {
    console.log("Aprobado pero raspando,");
} else if (promediofinal > 7.0) {
    console.log("el promedio no es valido en chile,");
} else {
    console.log("Aprobaste la materia,");
}


let tengoLaTarjeta = true;
let tengoDinero = true;
let monto = 1000;
if (tengoLaTarjeta == true && tengoDinero == true && monto >= 1000) {
    console.log("tengo que ir a la parada de bus ,");
} else if (tengoLaTarjeta == true && tengoDinero == true && monto < 1000) {
    console.log("tengo que ir a la parada de bus,");
}


//ejercio vieaje en micro

let tarjeta = true;
let montoTarjeta = 0;
let valorPasaje = 700;
//condicion para viajar en micro,
if (tarjeta == true && montoTarjeta >= 700) {
    console.log("tiene tarjeta puedes viajar en micro,");
} else if (tarjeta == true && montoTarjeta < valorPasaje) {
    console.log("tiene tarjeta, pero mo tiene saldo suficiente para viajar en micro,");
} else if (tarjeta == false && montotarjeta >= valorPasaje) {
    console.log("no tiene tarjeta pero tiene saldo suficiente para viajar en micro,");
} else{
    console.log("tiene tarjeta y no tiene saldo");
console.log("no tiene tarjeta ni dinero suficiente para pagar el pasaje,");
}

//condicion para carga el saldo de la tarjeta,
if  (montoTarjeta < valorPasaje) {
    montoTarjeta = montoTarjeta + 1000;
    console.log("cargaste saldo a tu ahora tarjeta, ahora tienes: " + montoTarjeta);
}else{
    console.log("no necesitas cargar saldo a tu tarjeta");
}





