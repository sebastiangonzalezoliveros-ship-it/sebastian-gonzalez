// Los arreglos son estructuras que nos permiten almacenar 
// Multiples valores en una sala variable.
// En javaScript, los arreglos se crean utilizando corchetes []
// Y pueden contener elementos de diferentes tipos de datos,
// como numeros, cadenas de texto, booleanos, objetivo e incluso
// otros arreglos.

let numeros= [1, 2, 3, 4, 5]; //arreglo de numeros 
let frutas = ["manzana", "banana", "naranja"]; //arreglo de cadenas 
let apuestas = [true, false, true]; //arreglos de booleanos

//podemos acceder a los elementos de un arreglo utilizando su indice,
// que comienza en 0. por ejemplo, para acceder al primer elemento 
// del arreglo "fritas", podemos hacer lo siguiente: 

console.log(frutas[0]);//muestra por consola la primera fruta: "manzana"
console.log(frutas[1]);//muestra por consola la segunda fruta: "banana"
console.log(frutas[2]);//muestra por consola la tercera fruta: "naranja"
//posicion de loas elemtos en una lista = indice 

//tambien podemos modificar los elemtos de un arreglo asignado
// un nuevo valor a un indice especifico. por ejemplo, si queremos
//cambiar la segunda fruta a "kiwi", podemos hacer lo siguiente: 

frutas[1] = "kiwi"; //cambiamos "banana" por "kiwi"
console.log(frutas[1]); //muestra por consola la segunda fruta: "kiwi"

//para mostrar la lista completa, mostramos por consola lo siguiente:
console.log(frutas);

//tenemos diferentes funciones para trabajar con arreglos, como: 
//length() -nos permite obtener la cantidad de elemntos que tiene un arreglo. 
console.log(frutas.length); //muestra por consola la cantidad de frutas: 3
console.log(numeros.length); //muestra por consola la cantidad de nuemros: 5
console.log(apuestas.length); //muestra por consola la cantidad de apuestas: 3

//podemos mostrar el ultimo elemento de un arreglo utilizando la propiedad length.
console.log(frutas[frutas.length -1]); //muestra por consola la ultima fruta: 

//push() - nos permite agregar un nuevo elemento al final de un arreglo.
frutas.push("pera"); //agregamos "pera" 


//pop() - nos permite eliminar el ultimo elemento de un arreglo.
frutas.pop(); //eliminamos el ultimo elemento del arreglo de frutas
console.log(frutas); // muestra por consola el arreglo actualizado

//podemos recorrer un arreglo utilizado un bucle for.
//por ejemplo, si queremos mostrar todas las frutas en el arreglo, 
//podemos hacer lo siguiente: 

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[1]); //muestra por consola cada fruta con el arreglo
}
//el contador "i" nos permite acceder a cada elemento del arreglo utilizado
//su indice.
// utilizamos "frutas.length" para asegurarnos de que el bucle se ejcute 
//hasta el ultimo elemento del arreglo. 

let compraSemana1 = [1000, 2500, 3000, 1500, 2000]; 
//podemos utilizar un bucle for para calcular el total de la compra semanal. 
let totalCompra = 0; // inicializamos una variable para almacenar el total 
for (let i = 0; i < compraSemanal.length; i++) {
    totalCompra += compraSemanal[i]; // sumamos cada elemento del arreglo al total
}
console.log("total de la compra semanal: " + totalCompra); 