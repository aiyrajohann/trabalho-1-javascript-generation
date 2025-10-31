import readline from 'readline-sync';

let nome = readline.question("Digite seu nome: ");
let idade = readline.questionInt("Digite sua idade: ");
let primeiraDoacao = readline.question("é sua primeira doação? (s/n): ").toLocaleLowerCase();

if (idade >= 18 && idade <= 59) // faixa etária principal
 console.log(`${nome}, você está apto(a) a doar sangue.`);
else if (idade >= 60 && idade <= 69){ // faixa etária secundária
    if (primeiraDoacao === 's') {
        console.log(`${nome}, você não está apto(a) a doar sangue, pois a primeira doação não pode ser feita entre 60 e 69 anos.`);
    } else if (primeiraDoacao === 'n') {
        console.log(`${nome}, você está apto(a) a doar sangue.`);
    } else {
        console.log("Resposta inválida para primeira doação. Por favor, responda com 's' ou 'n'.");
    }  
} else { // fora das faixas etárias
    console.log(`${nome}, você não está apto(a) a doar sangue.`);
}
