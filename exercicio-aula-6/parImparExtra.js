import readline from 'readline-sync';

let numero = parseInt(readline.question('Digite um número inteiro: '), 10);// O 10 indica que é base decimal
//usada para boas práticas e com objetivo de evitar erros de interpretação e ambiguidade

if (numero % 2 === 0) {
    console.log(`O ${numero} é par.`);
} else {
    console.log(`O ${numero} é ímpar.`);
}

