import readline from 'readline-sync';

let opcao = readline.questionInt("Escolha uma opcao (1-6):\n1. Opcao 1\n2. Opcao 2\n3. Opcao 3\n4. Opcao 4\n5. Opcao 5\n6. Opcao 6\n digita o numero da opcao: ");
let quantidade = readline.questionInt("Digite a quantidade: ");

switch (opcao) {
    case 1:
        console.log("Cachorro quente");
        let preco = 10.00;
        console.log(`Valor unitario R$:${preco.toFixed(2)}`);
        let total = quantidade * preco;
        console.log(`Valor total R$:${total.toFixed(2)}`);
        break;
    case 2:
        console.log("Xis Salada");
        let preco2 = 15.00;
        console.log(`Valor unitario R$:${preco2.toFixed(2)}`);
        let total2 = quantidade * preco2;
        console.log(`Valor total R$:${total2.toFixed(2)}`);
        break;

    case 3:
        console.log("Xis Bacon");
        let preco3 = 18.00;
        console.log(`Valor unitario R$:${preco3.toFixed(2)}`);
        let total3 = quantidade * preco3;
        console.log (`Valor total R$:${total3.toFixed(2)}`);
        break;
    case 4:
        console.log("Bauru");
        let preco4 = 12.00;
        console.log(`Valor unitario R$:${preco4.toFixed(2)}`);
        let total4 = quantidade * preco4;
        console.log(`Valor total R$:${total4.toFixed(2)}`);
        break;
    case 5:
        console.log("Refrigerante");
        let preco5 = 8.00;
        console.log(`Valor unitario R$:${preco5.toFixed(2)}`);
        let total5 = quantidade * preco5;
        console.log(`Valor total R$:${total5.toFixed(2)}`);
        break;
    case 6:
        console.log("Suco de laranja");
        let preco6 = 13.00;
        console.log(`Valor unitario R$:${preco6.toFixed(2) }`);
        let total6 = quantidade * preco6;
        console.log(`Valor total R$:${total6.toFixed(2)}`);
        break;  
    default:
        console.log("Opcao invalida");
        break;
}
