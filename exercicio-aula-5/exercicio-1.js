import readline from 'readline-sync';

let salario = readline.questionFloat("Digite seu salário: ");
console.log("Seu salário: " + salario);

let abono = readline.questionFloat("Digite o valor do abono: ");
console.log("Seu abono: " + abono);

let salarioNovo = salario + abono;

console.log("Seu novo salário: " + salarioNovo);