/*
2- Exibir os números pares de 0 a 60, fazer uso 
do laço de repetição for.
Nome: Nathália Caroline Gumbio
*/

console.clear();

for(let par = 0; par <= 60; par++){
    if(par % 2 == 0){
        console.log(`Os numeros pares de 0 a 60 são: ${par}`);
    }
}