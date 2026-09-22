//en javaScript los comentarios se hacen con dos barras(//)

//Declaración de variables con tipo de dato basicos
let nombre = "juana"; //Variable de tipo string
let edad = 30; //Variable de tipo string
let esEstudiante = true; //Variable de tipo boolean
let direccion;  //Variable sin valor asignado (undefined)
let ciudasd = null; //Variable con valor nulo

//let se utiliza para declarar variables que pueden cambiar su valor

const PI = 3.14159; //variable constante, su valor no puede cambiar
const GRAVERDAD = 9.81; //CONSTANTE DE GRAVEDAD 
const NOMBRE_COMPLETO = "Sebastian Gonzalez"; //CONSTANTE DE TIPO STRING

//const se utiliza para declarar variables que no pueden cambiar su valor
//las variables let le podemo reasignar un valo , mientras que 
// las constantes no const no pueden ser reasignadas.

//Operadores aritméticos
let numero1 = 10;
let numero2 = 5;
let resultadoSuma = numero1 + numero2; //Suma
let resultadoResta = numero1 - numero2; //Resta
let resultadoMultiplicacion = numero1 * numero2; //Multiplicación
let resultadoDivision = numero1 / numero2; //División
let resultadoModulo = numero1 % numero2; //Módulo (resto de la división)    
edad = edad + 1; //Incremento de edad en 1

//ver resultados en consola
console.log("el  resultado de la suma es: " + resultadoSuma);
console.log("el  resultado de la resta es: " + resultadoResta);
console.log("el  resultado de la multiplicación es: " + resultadoMultiplicacion);
console.log("el  resultado de la división es: " + resultadoDivision);
console.log("el  resultado del módulo es: " + resultadoModulo);
console.log("la suma de todos los resultados es: " + (resultadoSuma + resultadoResta + resultadoMultiplicacion + resultadoDivision + resultadoModulo));


//concatencación de strings
//puedo hacer la concatenacion de diferentes formas:
let saludo = "Hola, mi nombre es " + nombre + " y tengo " + edad + " años.";
console.log(saludo);
//o de otra forma 
console.log("Hola, mi nombre es " + nombre + " y tengo " + edad + " años."); 
//Recordar que javascript no agrega espacios automaticamente








