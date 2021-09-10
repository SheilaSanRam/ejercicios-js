/* 2.- Crear un programa que solicite 2 números por prompt. Mandar esos dos valores a una función por 
parámetros para realizar las operaciones aritméticas básicas( suma, resta, multiplicación y división), y mostrar el resultado.
Nota: El resultado puede ser mostrado por consola o por html.
*/

//alert('Ejercicio 2')
alert('Realizo operaciones aritméticas entre dos números');

var num1=parseInt(prompt('Ingresa un número (num1): '));
var num2=parseInt(prompt('Ingresa un número (num2): '));


function sumatoria(num1,num2){
    var sumatoria=num1+num2;
    document.write('La suma es: '+sumatoria+'</br>') 
}

function resta(num1,num2){
    var resta=num1-num2;
    document.write('<br/> La resta num1-num2 es: '+resta+'</br>')
}

function multiplica(num1,num2){
    var multiplica=num1*num2;
    document.write('<br/> La multiplicación es: '+multiplica+'</br>')
}

function division(num1,num2){
    var division=num1/num2;
    document.write('<br/> La división de num1/num2 es: '+division+'</br>')

    var division2=num2/num1;
    document.write('<br/> La división de num2/num1 es: '+division2+'</br>')
}

sumatoria(num1,num2);
resta(num1,num2);
multiplica(num1,num2);
division(num1,num2);

/* Esta es la funcion completa

function aritmetica(num1,num2){
//aquí se hace la suma
    var sumatoria=num1+num2;
     document.write('La suma es: '+sumatoria) 
//aquí se hace la resta
    var resta=num1-num2;
    document.write('<br/> La resta num1-num2 es: '+resta)
//aquí se hace la multiplicación
    var multiplica=num1*num2;
    document.write('<br/> La multiplicación es: '+multiplica)
//aquí se hace la división
    var division=num1/num2;
    document.write('<br/> La división de num1/num2 es: '+division)
    var division2=num2/num1;
    document.write('<br/> La división de num1/num2 es: '+division2)
}

aritmetica(num1,num2);
*/


