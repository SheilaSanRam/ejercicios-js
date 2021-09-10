//alert('Ciclos');

/* Ciclo For en JavaScript
    Sirve para ejecutar n cantidad de veces un código.
*/
/*
for(var i=0; i<5; i++){
    //código a ejecutar
    console.log('Hola desde el ciclo For. Vuelta '+ i);
}
*/

const frutas=['Manzana','Mango', 'Pera','Piña','Sandía', 'Melón'];

/*
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[5]);
*/

for(var i=0; i<frutas.length; i++){
    
    console.log(frutas[i] + ' es una fruta.');
}