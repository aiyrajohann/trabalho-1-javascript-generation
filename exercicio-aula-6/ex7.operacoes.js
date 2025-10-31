
import readline from 'readline-sync';

let numero1 = readline.questionFloat("Digite o primeiro numero: "); 
let numero2 = readline.questionFloat("Digite o segundo numero: ");
let operacao = readline.questionInt("Escolha a operacao desejada (1-Adicao, 2-Subtracao, 3-Multiplicacao, 4-Divisao): ");

switch (operacao) {
    case 1:
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);  
        break;
    case 2:
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);  
        break;
    case 3:
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);  
        break;
    case 4:
        if (numero2 !== 0) {
            console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
              
        } else {
            console.log("Erro: Divisao por zero nao e permitida.");
        }   
        break;
    default:
        console.log("Operacao invalida.");
        break;
}   