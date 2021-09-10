// Esta es la manera de poner un comentario

/* Son comentarios multilínea
si quiero quitar el comentario se cierra así:
*/


//alert es la ventanita emergente 
alert("¡Hola, mundo!");


//Declaración de variables
//El valor puede cambiar
var nombre= 'Sheila';
var apellidos= 'Sánchez Ramírez';
var edad=28;

let colorFavorito='Azul';
let comidaFavorita='Chiles en nogada';
let telefono;

telefono=5525104039;


//Constantes
//no pueden cambiar
const gravedad=9.8;
const estudiantes=20;


//Let y  var diferencias

var numero=40;

if(true){
    var numero=50;
    console.log(numero);
}

console.log(numero);

var numero2='100';
console.log(numero2);

if(true){
    let numero2=5;
    console.log(numero2);
    let numero3=27;
    console.log(numero3);
}

console.log(numero2);
console.log(numero3);

    
    //tipos de datos
//saber el tipo de variable
//typeof(nombre);

//imprimir algo en consola
/*
console.log(typeof(nombre));
console.log(typeof(edad));
*/