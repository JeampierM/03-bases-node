/*
// hacer la tabla del 5 en javascrip
console.clear();
console.log("=============");
console.log("Tabla del 5");
console.log("=============");
const j = 5;
for(i = 1;i<=10;i++){
    console.log(`${j} x ${i} = ${j * i}`);
}
*/

/*
const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
console.clear(); 
console.log('=============');
console.log('  Tabla del 5');
console.log('=============');
const j = 5;
let salida = '';
for (let i = 1; i <= 10; i++) {
    salida += `${j} x ${i} = ${j * i}\n`; // Concatenamos la tabla del 5
}
console.log(salida);
//el file system para grabar un archivo. en el primer parametro
//si no se pone el path, se graba en la rireccion donde esta ejecutando.
//segundo parametro son los datos. y el tercero es un callback que recibe el error si algo sale mal.
// Escribimos la tabla del 5 en un archivo llamado 'tabla-del-5.txt'
fs.writeFile('tabla-del-5.txt', salida, (err) => {
    if (err) throw err; // Manejamos el error, si lo hay
    console.log('Tabla del 5 creada'); // Mostramos un mensaje de éxito
});
*/

/*
// Hacer la tabla del 5 en JavaScript
const { crearArchivo } = require('./helper/multiplicar');
console.clear();

const j = 6; // Cambiado a 5 para la tabla del 5

crearArchivo(j)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));
*/

/*
const { crearArchivo } = require('./helper/multiplicar');
const argv = require('yargs').argv;
console.clear();
console.log(process.argv);
console.log(argv);
const j = argv.j || 5; // Si no se especifica j en los argumentos, se usa 5 por defecto
crearArchivo(j)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));
*/


// hacer la tabla del 5 en javascript
const { option } = require("yargs");
const { crearArchivo } = require("./helper/multiplicar");
const colors = require("colors");
const argv = require("./config/yargs");


console.clear();

//console.log(process.argv);
console.log(argv);
//console.log('Base de yargs:', argv.b);

//const[,,arg3 = 'j = 5'] = process.argv; //estamos tomando el tercer argumento
//const[,j] = arg3.split('='); //separa el string por el caracter =

//console.log(j);

//const j = 6;

crearArchivo(argv.b,argv.l,argv.h).then (nombreArchivo => console.log(nombreArchivo.rainbow, 'creado')).catch( err => console.log(err));

//node app --j=7
//node app --b=7
