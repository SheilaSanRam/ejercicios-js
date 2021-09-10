/* ------------EJERCICIO------------
Camila acaba de comenzar su nuevo rol como Desarrolladora Java Junior en un banco. Ella está trabajando en cuentas de
 clientes para una nueva aplicación de banca móvil. Se le pide que implemente una función que muestre la cantidad mayor 
 de tres cantidades en la pantalla de inicio.
*/


alert('Muestro el número mayor');

//Ingreso de valores

var x1=parseInt(prompt('Ingresa el primer número'));
var x2=parseInt(prompt('Ingresa el segundo número'));
var x3=parseInt(prompt('Ingresa el tercer número'));

//comparación

if(x1==x2 && x1==x3){
    document.write('Los números son iguales');
}
else if(x1>x2 && x1>x3){
    document.write(x1+' es el número más grande');
}
else if(x2>x1 && x2>x3){
    document.write(x2+' es el número más grande');
}
else if (x3>x1 && x3>x2){
    document.write(x3+ 'es el número más grande');
}

// Prueba 2
/*
var numeros=array();
numeros.push(prompt('Ingresa el primer número'));
numeros.push(prompt('Ingresa el segundo número'));
numeros.push(prompt('Ingresa el tercer número'));

numeros.reverse();

document.write(numeros[0]+' es el número más grande');
*/