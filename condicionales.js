/*sirve para verificar si el enlace entre js y html está bien
alert('Condicionales');
*/

/*
var edad=prompt('¿Cuál es tu edad?');

if(edad>=18){
    //console.log('Eres mayor de edad');
    //document.write es el comando para escribir directo en el sitio
    document.write('Eres mayor de edad');
}else{
    //console.log('Eres menor de edad')
    document.write('Eres menor de edad');
}
*/


/* Preguntarle al usuario su edad. Después hacer un cndicional if con las siguientes situaciones:
-Si el usuario es mayor de 18 y menor de 29 años, mostrar el mensaje "Felicidades, has sido aceptado en el bootcamp de generation",
en caso contrario mostrar el mensaje: "No cumples con los requisitos del programa"
*/


var edad=prompt('¿Cuál es tu edad?');

if(edad>=18&&edad<=29){
    document.write('¡Felicidades, has sido aceptado en el bootcamp de Generation!');
}else{
    document.write('No cumples los requisitos de ingreso al programa :(');
}
