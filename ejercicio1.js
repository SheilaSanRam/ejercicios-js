/* 1.- Crear un programa que solicite al usuario su nombre por prompt y devuelva el siguiente saludo: 
"Hola nombre, saludos desde javascript". 
Nota: El saludo puede ser mostrado por consola o por html.
*/

//alert('Ejercicio 1');

var nombre=prompt('Escribe tu nombre: ');

document.write('¡Hola, '+nombre+'! Saludos desde JavaScript ;)'+'</br>');
document.write('¡Hola, '+nombre.toLowerCase()+'! Saludos desde JavaScript ;) '+'</br>');
document.write('¡Hola, '+nombre.toUpperCase()+'! Saludos desde JavaScript ;) '+'</br>');
document.write('¡Hola, '+nombre.toLocaleLowerCase()+'! Saludos desde JavaScript ;) '+'</br>');
document.write('¡Hola, '+nombre.toLocaleUpperCase()+'! Saludos desde JavaScript ;) '+'</br>');