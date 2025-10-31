import readline from 'readline-sync';

let saldo = 0.00;

while (true) {//Usei o while para criar um loop infinito para o menu de operacoes pq não consegui pensar em outra forma de fazer isso
    let operacao = readline.questionInt(//apresentar o menu de operacoes
        "Escolha a operacao bancaria desejada:\n1 - Saldo\n2 - Saque\n3 - Deposito\n4 - Sair\nDigite a opcao: "//menu de operacoes
    );

    switch (operacao) { //processar a operacao escolhida
        case 1:
            console.log(`Seu saldo atual e: R$ ${saldo.toFixed(2)}`);//mostrar saldo
            break;
        case 2: {
            let valorSaque = readline.questionFloat("Digite o valor do saque: R$ ");//solicitar valor do saque
            if (valorSaque > 0 && valorSaque <= saldo) {//verificar se o valor e positivo e se ha saldo suficiente
                saldo -= valorSaque;//realizar o saque
                console.log(`Saque de R$ ${valorSaque.toFixed(2)} realizado. Saldo atual: R$ ${saldo.toFixed(2)}`);//confirmar saque
            } else if (valorSaque <= 0) {//verificar se o valor e positivo
                console.log("Digite um valor de saque maior que 0.");//mensagem de erro para valor invalido
            } else {//saldo insuficiente
                console.log("Saldo insuficiente para realizar o saque.");//mensagem de erro para saldo insuficiente
            }
            break;
        }
        case 3: {
            let valorDeposito = readline.questionFloat("Digite o valor do deposito: R$ ");//solicitar valor do deposito
            if (valorDeposito > 0) {//verificar se o valor e positivo
                saldo += valorDeposito;//realizar o deposito
                console.log(`Deposito de R$ ${valorDeposito.toFixed(2)} realizado. Saldo atual: R$ ${saldo.toFixed(2)}`);//confirmar deposito
            } else {//valor invalido
                console.log("Digite um valor de deposito maior que 0.");//mensagem de erro para valor invalido
            }
            break;
        }
        case 4:
            console.log("Encerrando. Obrigado.");//mensagem de encerramento
            process.exit(0);//sair do programa, se não selecionar sair vai seguir perguntando
        default:
            console.log("Opcao invalida. Tente novamente.");//mensagem de erro para opcao invalida
            break;
    }

    console.log(""); // Linha em branco para melhor visualizacao
}