
import readline from 'readline-sync';

let nome = readline.question("Digite o nome do colaborador: ");
let cargo = readline.questionInt("Digite o codigo do cargo (1-Gerente, 2-Vendedor, 3-Supervisor, 4-Motorista, 5-Estoquista, 6-Tecnico de TI):");
let salarioAtual = readline.questionFloat("Digite o salario atual do colaborador: R$");

switch (cargo) {
    case 1:
        cargo = "Gerente";
        salarioAtual *= 1.10; // Reajuste de 10%    
        break;
    case 2:
        cargo = "Vendedor";
        salarioAtual *= 1.07; // Reajuste de 7%
        break;
    case 3:
        cargo = "Supervisor";
        salarioAtual *= 1.09; // Reajuste de 9%
        break;
    case 4:
        cargo = "Motorista";
        salarioAtual *= 1.06; // Reajuste de 6%
        break;
    case 5:
        cargo = "Estoquista";
        salarioAtual *= 1.05;// Reajuste de 5%
        break;

    case 6:
        cargo = "Tecnico de TI";
        salarioAtual *= 1.08; // Reajuste de 8%
        break;
    default:
        console.log("Código de cargo inválido.");
        break;
}

console.log(`O colaborador ${nome} com o cargo código ${cargo} agora tem um salário reajustado de R$: ${salarioAtual.toFixed(2)}`);