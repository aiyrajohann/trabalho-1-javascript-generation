import readline from 'readline-sync';

let numeroA = readline.questionInt("Digite o valor de A: ");
let numeroB = readline.questionInt("Digite o valor de B: ");
let numeroC = readline.questionInt("Digite o valor de C: ");

let somaAB = numeroA + numeroB;

if (somaAB > numeroC) {
    console.log("A soma de A e B é maior que C.");
} else if (somaAB < numeroC) {
    console.log("A soma de A e B é menor que C.");
} else {
    console.log("A soma de A e B é igual a C.");
}
