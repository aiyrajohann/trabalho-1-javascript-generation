import readlineSync from 'readline-sync';

let nota1 = readlineSync.questionFloat("Digite a nota 1: ");
let nota2 = readlineSync.questionFloat("Digite a nota 2: ");
let nota3 = readlineSync.questionFloat("Digite a nota 3: ");
let nota4 = readlineSync.questionFloat("Digite a nota 4: ");

let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("A média das notas é: " + media.toFixed(1));