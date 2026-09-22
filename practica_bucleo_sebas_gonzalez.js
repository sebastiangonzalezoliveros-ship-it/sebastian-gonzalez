// Bucles en JS

// Tenemos dos tipos de bucles en JS: while y for

// for (para) lo utilizamos cuando sabemos cuantas veces se va a repetir el bucle
for (let i = 0; i < 10; i++) 
    console.log("El valor de i es: " + i);

// let i = 0; // inicialización la variable i y decimos que el bucle comienza en 0 
// i < 10; // condición que debe cumplirce para que el bucle se siga ejecutando,
// definidos que el bucle se ejecutara mientras i sea menor que 10.
// i++; // incremento el valor cuando no sabemos cuantas veces se va a repetier el bucle,
// es decir, cuando no sabemos cuantas veces se va a cumplir la condicion.

let bateria = 3;

white (bacteria > 0);{
    console.log("La bateria esta en : " + bateria);
    bateria--; // decretemos el valor de bateria en 1 cada vez que se ejecute el bucle.
    // es decir, bateria = bateria - 1, este puede ser bacteria++ si queremos que sea creciente,
    // es decir, que se vaya sumando 1 cada vez que se ejecute el bucle.
}
console.log("Bateria agotada, el bucle ha terminado.");

// Ejercito: crear un bucle que imprima la suma de los numeros del 1 al 100.
let suma = 0;
for (let i = 1; i <= 100; i++); {
    suma += 1; //suma = suma + 1
    console.log("las sumas de los numeros ddel 1 al " + " es " + suma); 
}
console.log("la suma total de los numeros del 1 al 100 es: " + suma);

//ejercicios 2 =crear un bucle que imprima los numeros pares del 1 al 100
for (let i = 1; i < 100; i++); {
    if (i % 2 ===) {//si el numero es divicible entre 2 , es par
        console.log("el numero par es: " + i );

    }
}

//ejecicio 3 : crear un bucle de descarga de datos
descargarDatos = 100;
white (descargarDatos > 0); {
    console.log("descargando datos ..." + descargarDatos + "%");
    descargarDatos
    }
    console.log("descarga completa")

//ejercicio 4: creasr un bucle que recorra un array de numeros y sumes sus valores
let numeros = [1, 2, 3, 4, 5,]
let sumaNumeros = 0;
for (let i = i < numeros.length; i++ ) ; {//lemgth nos da la cantidad  de elementos que tiene 
    //el array(la lista de numeros, que tienen 5 datos)
    sumaNumeros += numeros [i];
}