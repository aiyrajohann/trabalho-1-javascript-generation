import readline from 'readline-sync';

const vetor =[15,3,27,8,12,42,19,7,31,25];// vetor com 10 números inteiros
console.table(vetor);// exibe o vetor original

let numero= parseInt(readline.question('Digite um numero para buscar no vetor: '));// solicita um número ao usuário
 let posicao = vetor.indexOf(numero);// o .indexOf() retorna a posição do número no vetor ou -1 se não encontrado
 if(posicao !== -1) {// verifica se o número foi encontrado
    console.log(`Número ${numero} encontrado na posição ${posicao} do vetor.`);// exibe a posição do número se encontrado
 } else {
    console.log(`Número ${numero} não encontrado no vetor.`);// exibe mensagem se o número não for encontrado
 }    
