//una funcion es bloque de codigo que se permite reutilizarlo y llamar
//(ejecutar) en el momento que se necesite, la cantidad de veces
//que se requiero las funciones puenden recibir parametros y retornar 
//valores,

function saludar(){//funcion sin parametros
    console.log("hola, bienvenido a la programacion en javascript");
};

saludar();//llamando a la funcion

function saludopersonalizado(nombre){//funcion con parametros
    return "hola, " + nombre + "!";
};

saludopersonalizado("sebastian");//llamando a la funcion con argumento

//llamada a la funcion con variable como argumento
let usuario = "sebastian";
let mensajesaludon = saludopersonalizado(usuario);
console.log(mensajesaludon);//impreme ele mensaje de saludo personalizado

//Función que suma 2 números y devuelve el resultado

function sumar(num1, num2) {
    return num1 + num2;
}

let resultadoSuma = sumar(8, 12);
console.log("La suma es: " + resultadoSuma);
// 2. Función que determina si un número es par o impar
function parOImpar(numero) {

    if (numero % 2 == 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

console.log(parOImpar(7));


// 3. Función que muestra el número mayor entre 3 números
function numeroMayor(a, b, c) {

    if (a >= b && a >= c) {
        return "El número mayor es: " + a;
    } else if (b >= a && b >= c) {
        return "El número mayor es: " + b;
    } else {
        return "El número mayor es: " + c;
    }
}

console.log(numeroMayor(15, 8, 20));


// 4. Función para calcular el promedio de cinco notas

function promedio(n1, n2, n3, n4, n5) {
    return (n1 + n2 + n3 + n4 + n5) / 5;
}

let promedioFinal = promedio(6.0, 5.8, 7.0, 6.5, 5.9);
console.log("El promedio es: " + promedioFinal);



