/*
3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
Nome: Nathália Caroline Gumbio
*/

console.clear();
const teclado = require (`prompt-sync`)();

let maior = 0
// indice                 0   1  2   3   4   5  6  7   8   9
let numeros: number [] = [9, 12, 4, 26, 32, 18, 3, 9, 22, 15];

for(let i = 0; i <10; i++){
    if (numeros[i] > maior){
        maior = numeros[i];
    }   
}
console.log(`O maior número é ${maior}`);
