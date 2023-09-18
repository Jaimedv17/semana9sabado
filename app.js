
//EJERCICIO (1)

const factorial = prompt ("ingrese un numero")

let resultado1 = 1
for (let i = 1; i <= factorial ; i++){
    resultado1 = resultado1 * i
    // resultado = 1 * 1 = 1 
    // resultado = 1 * 2 = 2
    // resultado = 2 * 3 = 6
    // resultado = 6 * 4 = 24
    
}
console.log (resultado1)


//EJERCICIO 2


// const alumnos = [
//   {
//     nombre: "David",
//     nota: 80,
//   }, 
//   {
//     nombre: "Vinoth",
//     nota: 77
//   } ,
//   {
//     nombre: "Divya",
//     nota: 88,
//   } ,
//   {
//     nombre: "Ishitha",
//     nota: 95,
//   } ,
//   {
//     nombre: "Thomas",
//     nota: 68
//   } 
// ]

// let sumaNotas = 0
// let promedio = 0

// for (let i = 0; i < alumnos.length; i++){
//   sumaNotas = sumaNotas + alumnos[i].nota
//   // sumNotas = 0 + 80 = 80
//   // sumNotas = 80 + 77 = 157 
//   // sumNotas = 157 + 88 = 
// }

// promedio = sumaNotas / alumnos.length
// console.log (promedio)

// if (promedio < 60 ){
//   console.log ("El nivel es F")
// }
// else if (promedio < 70){
//   console.log ("El nivel es D")
// }
// else if (promedio < 80){
//   console.log ("El nivel es C")
// }
// else if (promedio < 90){
//   console.log ("El nivel es B")
// }
// else if (promedio < 100){
//   console.log ("El nivel es A")
// }


//EJERCICIO 3

// for (let i = 1; i <= 15; i++){
//   if (i % 2 === 0){
//     console.log (`El numero ${i} es par`)
//   }
//   else {
//     console.log(`El número ${i} es impar`);
//   }
// }

//EJERCICIO 4

// for (let i = 1; i <= 100; i++){

//   if (i % 3 === 0 && i % 5 === 0){
//     console.log ("FizzBuzz");
//   }
//   else if  (i % 3 === 0){
//     console.log ("Fizz");
//   }
//   else if (i % 5 === 0){
//     console.log ("Buzz");
//   }
//   else{
//     console.log (i);
//   }
// }


//EJERCICIO 5

// let arreglo = [5, 1, 8, 6, 3];
// let arregloNuevo = [];

// for (let i = arreglo.length - 1; i >= 0; i--) {
//   arregloNuevo[arreglo.length - 1 - i] = arreglo[i];
// }

// console.log(arregloNuevo);


//EJERCICIO 6

// let arreglo = ["hola", "helo", "mito", "aloh"];
// let arregloNuevo = [];

// for (let i = arreglo.length - 1; i >= 0; i--) {
//   arregloNuevo[arreglo.length - 1 - i] = arreglo[i];
// }

// console.log(arregloNuevo);

//EJERCICIO 7

// let base = parseFloat(prompt("Introduce el número base:"));
// let exponente = parseInt(prompt("Introduce el exponente:"));

// function calcularPotencia(base, exponente){
//   let resultado = 1
//   for (let i = 0; i < exponente; i++){
//     resultado *= base;
//   }
//   return resultado;
// }

// let resultadoPotencia = calcularPotencia (base, exponente);
// console.log ("El resultado de " + base + " elevado a la " + exponente + " es: " + resultadoPotencia);


//EJERCICIO 8

// const arrayNumbers = [1, 2, 3, 4, 5];
 
// let suma = 0;
// for (let i = 0; i < arrayNumbers.length; i++) {
//   suma += arrayNumbers[i];
// }
 
// console.log("La suma es:" +suma);


//EJERCICIO 9

// let arreglo = [4, 5, 1, 8, 3];
// let numeroMayor = arreglo[0];

// for (let i = 1; i < arreglo.length; i++){
//   if (arreglo[i] > numeroMayor){
//     numeroMayor = arreglo[i]
//   }
// }

// console.log ("El numero mayor es " +numeroMayor)


//EJERCICIO 10

// let arreglo = [3, 4, 5, 12, 6, 1, 13]
// let arregloPar = [];

// for ( let i = 0; i < arreglo.length; i++){
//   if (arreglo[i] % 2 ===0){
//   arregloPar[arregloPar.length] = arreglo[i];
//   }
// }

// console.log ("Los numeros pares son: "+arregloPar);


//EJERCICIO 11

// let library = [
//   {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true,
//   },
//   {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     readingStatus: true,
//   },
//   {
//     author: 'Suzanne Collins',
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     readingStatus: false,
//   },
// ];

// for (let i = 0; i < library.length; i++) {
//   if (library[i].readingStatus === true) {
//     console.log("Libro: " + library[i].title + " - Autor: " + library[i].author);
//   }
// }





  

  

