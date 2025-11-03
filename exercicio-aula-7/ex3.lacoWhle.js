import readline from 'readline-sync';

let idade; // variável para armazenar a idade lida
let menor21 = 0;
let maior50 = 0; 
while(true) {// loop infinito, será interrompido com break
    idade = parseInt(readline.question('Digite uma idade (ou um numero negativo para sair): '));
    if(idade < 0) break; // sair do loop se idade for negativa
    if(idade < 21) menor21++;// incrementa contador se idade for menor que 21
    if(idade > 50) maior50++;// incrementa contador se idade for maior que 50
}
console.log(`Total de pessoas com menos de 21 anos: ${menor21}`);// exibe total de pessoas com menos de 21 anos
console.log(`Total de pessoas com mais de 50 anos: ${maior50}`);// exibe total de pessoas com mais de 50 anos

//Esse código lê idades do usuário até que uma idade negativa seja inserida.
// Ele conta quantas pessoas têm menos de 21 anos e quantas têm mais de 50 anos,
// exibindo esses totais ao final. 
