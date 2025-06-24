// function toppings_choice(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("sinchomiapa"))
//     }, 3000);
//     })
// }
// async function kitchen(){
//  console.log("A")
//  console.log("B")
//  console.log("C")
//  await toppings_choice();
//  console.log("D")
//  console.log("E")
// } 

// kitchen();
// console.log("ordenar la cocina")
// console.log("Acomodar trastes")
// console.log("limpiar la mesas")

//Ejercicios de promesa 1 ------------------------------
// const saludoPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hola mundo");
//     }, 3000);

// });
// saludoPromesa.then((mensaje) => {
//     console.log(mensaje);
// });

//Ejercicio 2 numero par e impar usando try y catch------------------------------
// async function verificarNumero(num){
//     return new Promise((resolve,reject)=>{
//         if (num % 2 ==0){
//             resolve("es par")
//         }
//         else reject("es impar")
//     }).then((mensaje) =>{
//         console.log(mensaje)
//     }).catch((mensaje) =>{
//         console.log(mensaje)
//     });
// }
// await verificarNumero(5);

//Ejercico 3 Encadenando promesas------------------------------

// function promesa1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Paso 1 completo");
//         }, 2000);
//     });
// }
// function promesa2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Paso 2 completo");
//         }, 1000);
//     })
// }

// promesa1().then(mensaje => {
//     console.log(mensaje);
//     return promesa2();
//   }).then(message => console.log(message));

//Ejercicio 4 promesas en paralelo------------------------------

// function tareaA(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Tarea A completada");
//         }, 2000);
//     });
// }
// function tareaB(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Tarea B completada");
//         }, 1000);
//     });
// }
// function tareaC(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Tarea C completada");
//         }, 3000);
//     });
// }

// Promise.all([tareaA(), tareaB(), tareaC()])
//     .then((resultados) => {
//         console.log(resultados);
// });

//Ejercicio 5 --------------------------------------
function obtenerUsuario(){
    let random = Math.random()
    return new Promise((resolve, reject)=>{
        if (random <0.7){
            resolve({Nombre: "El chuky"})
        }
        else reject("Error Obteniendo al usuario")
    }).then(obj => console.log(obj.Nombre)).catch((mensaje)=> console.log(mensaje))
}
await obtenerUsuario();

