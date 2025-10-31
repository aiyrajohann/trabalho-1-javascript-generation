import readlineSync from 'readline-sync';   

let salarioBruto = readlineSync.questionFloat("Digite o salário bruto: ");
let adicionalNoturno = readlineSync.questionFloat("Digite o adicional noturno: ");
let horasExtras = readlineSync.questionFloat("Digite o valor das horas extras: ");
let descontos = readlineSync.questionFloat("Digite o valor dos descontos: ");

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;
console.log("Seu salário líquido é: " + salarioLiquido);