/*
3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
Nome: Nathália Caroline Gumbio
*/
console.clear();
var teclado = require("prompt-sync")();
var maior = 0;
var numeros = [9, 12, 4, 26, 32, 18, 3, 9, 22, 15];
for (var i = 0; i < 10; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}
console.log("O maior n\u00FAmero \u00E9 ".concat(maior));
