import readline from 'readline-sync'
let numero;

numero = readline.questionInt("Digite um numero: ");

// Verificando se é par ou ímpar
if (numero % 2 === 0) {
    // O número é par
    if (numero >= 0) {
        console.log("O número " + numero + " é par e positivo");
    } else {
        console.log("O número " + numero + " é par e negativo");
    }
} else {
    // O número é ímpar
    if (numero >= 0) {
        console.log("O número " + numero + " é ímpar e positivo");
    } else {
        console.log("O número " + numero + " é ímpar e negativo");
    }
}