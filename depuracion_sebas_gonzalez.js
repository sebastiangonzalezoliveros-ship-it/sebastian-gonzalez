//metodo 1 para depurar el codigo : console.log()
for (let i = 0; i < 10; i++) {

    console.log("el valor de i es:" + i);
}

//uilizamos la consola o terminal para ir resisando el valor de 
// la varible i en cada iteracion (en cada vuelta) del bucle.
// esta nos permite identificar si el bucle esta funcionado
// correctamente y si la variable i esta tomando los valores
// esperado.

//metodo 2 para depurar el codigo : debugger
for (let i = 0; i < 10; i++) {
  debugger; //esta pausard la ejecucion del codigo en este punto 
console.log("el valor de i es:" + i);
}

//metodo 3 para depurar el codigo: depurador de visual studio code 
// podemos establecer puntos de interrupcion (breakpoints) en el codigo 
//hacindo clic en el margen izquierda del pepuracion, la ejecucion se 
// detendra en los puntos de interrupcion, permitiendonos inpecinar
// detendra en los puntos de interrupcion, 