// ejercicio 1: contador de interaccion en una app
for (let contador = 1; contador <= 10; conta dor++) {
    console.log ("interaccion" + contador) ;

}

//ejercicio 2: simular un barra de carga 

for (let carga = 0; carga <= 100; carga+=10){
console.log("cargando..." + carga + "%");
} 
console.log("cargacompleta.")

//ejercicio 3: descuento progresivo en una tienda 
let descuento = 5;
for (let producto = 1; producto <= 5; producto++){
    console.log("producto" + producto + "- descuento aplicado" + descuento + "%");
    descuento +=5; 
}

//ejercicio 4: calcular el total de los puntos de un videojuego 
let puntos = 0;
for (let nivel = 1; nivel <=5; nivel++){
    puntos+=50;
}
console.log("puntos acumulados:" + puntos);

//ejercicio 5: contador de notificaciones en una app
let notificaciones = 5;
while (notificaciones >= 1) {
    if(notificaciones == 1){
        console.log("tienes 1 notificaciones nueva.");
    }
    notificaciones--;
}
console.log("no tienes notificaciones pendientes.");

