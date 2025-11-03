import readline from 'readline-sync';

let numero; // variável para armazenar o número lido
let somaPositivos = 0;// variável para armazenar a soma dos números positivos
 
do {
    numero = parseInt(readline.question('Digite um numero (zero para sair): '));// solicita um número ao usuário
    if(numero === 0) break; // sair do loop se numero for 0
    if(numero > 0) {// verifica se o número é positivo
        somaPositivos += numero;// soma o número se for positivo
    }
} while(true);// loop infinito, será interrompido com break

console.log(`Soma dos números positivos: ${somaPositivos}`);
//Esse código lê números do usuário até que o número zero seja inserido.
// Ele soma todos os números positivos inseridos e exibe essa soma ao final.    
