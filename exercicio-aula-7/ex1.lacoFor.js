import readline from 'readline-sync';

let num1 = parseInt(readline.question('Digite o primeiro numero: '));// solicita o primeiro número
let num2 = parseInt(readline.question('Digite o segundo numero: '));// solicita o segundo número

// Verifica se o primeiro número é maior ou igual ao segundo, se sim, solicita os números novamente até que sejam válidos

for(; num1 >= num2;) {// se for, solicita os números novamente
    console.log('Intervalo inválido. O primeiro número deve ser menor que o segundo.');// exibe mensagem de erro
    num1 = parseInt(readline.question('Digite o primeiro numero: '));// solicita o primeiro número novamente
    num2 = parseInt(readline.question('Digite o segundo numero: '));// solicita o segundo número novamente
}
console.log(`Números divisíveis por 3 e 5 entre ${num1} e ${num2}:`);// exibe o intervalo entre os dois números

for(let i = num1; i <= num2; i++) { // Isso aqui dunciona como um loop que percorre todos os números entre num1 e num2
    if(i % 3 === 0 && i % 5 === 0) {// verifica se o número é divisível por 3 e 5
        console.log((i) + ' é múltiplo de 3 e 5');// exibe o número se for divisível por 3 e 5
    }   
} 
//Esse código solicita dois números ao usuário, garantindo que o primeiro seja 
// menor que o segundo. Em seguida, ele percorre todos os números nesse intervalo 
// e imprime aqueles que são divisíveis por 3 e 5, usando um loop for para isso.