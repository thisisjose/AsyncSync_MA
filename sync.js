// const { reject } = require("async");

// function toppings_choice(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("sinchomiapa"))
//     }, 3000);
//     })
// }
// async function kitchen(){
//  console.log("A")
//  await toppings_choice();
//  console.log("D")
// } 

// kitchen();
// console.log("ordenar la cocina")

//Ejercicio 1 Async/Await Básico
// function esperarSaludo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("Hola desde async"))
//     }, 2000);
//     })
// }

// async function saludoEsperado() {
//     await esperarSaludo;
// }
// await saludoEsperado();


//Ejercicio 2 Manejo de errores con try y catch
// async function validarEdad(edad){
//     return new Promise((resolve,reject)=>{
//         if (edad >= 18){
//             resolve("Mayor edad")
//         }
//         else reject("Menor de edad")
//     }).then((mensaje) =>{
//         console.log(mensaje)
//     }).catch((mensaje) =>{
//         console.log(mensaje)
//     }), 1000
// }
// await validarEdad(18)

//Ejercicio 3 - Llamadas Secuenciales con Async/Await

// function paso1(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve ("Paso1");
//         }, 1000);
//     });
// }
// function paso2(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve ("Paso2");
//         }, 1000);
//     });
// }
// function paso3(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve ("Paso3");
//         }, 1000);
//     });
// }

// function ejecutarPasos() {
//     paso1()
//         .then((mensaje) => {
//             console.log(mensaje);
//             return paso2();
//         })
//         .then((mensaje) => {
//             console.log(mensaje);
//             return paso3();
//         })
//         .then((mensaje) => {
//             console.log(mensaje);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }
// await ejecutarPasos();

//Ejercicio 4 Async/Await con Fetch (API) ------------------------------------------
// async function obtenerDatos(){
//     const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     datos = await respuesta.json()
//     console.log(datos)
// }
// obtenerDatos()

//Ejercicio 5 multiples promesas en paralelo con Async/Await----------------------------------------

function tareaA(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Tarea A completada");
        }, 1000);
    });
}
function tareaB(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Tarea B completada");
        }, 2000);
    });
}
function tareaC(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Tarea C completada");
        }, 3000);
    });
}


async function multiPromesas() {
    await Promise.all([tareaA(), tareaB(), tareaC()])
    .then((resultados) => {
        console.log("Todas las tareas se completaron");
});
}
multiPromesas();
