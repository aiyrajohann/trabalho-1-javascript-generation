import readline from 'readline-sync';

let categoria = readline.question("O animal e vertebrado ou invertebrado? (vertebrado/invertebrado): ").toLowerCase();

if (categoria === 'vertebrado') {
    let tipo = readline.question("O animal e ave ou mamifero? (ave/mamifero): ").toLowerCase();
    if (tipo === 'ave') {
        let dieta = readline.question("O animal e carnivoro ou onivoro? (carnivoro/onivoro): ").toLowerCase();
        if (dieta === 'carnivoro') {
            console.log("O animal e uma Aguia.");
        } else if (dieta === 'onivoro') {
            console.log("O animal e uma Pomba.");
        } else {
            console.log("Dieta invalida.");
        }
    } else if (tipo === 'mamifero') {
        let dieta = readline.question("O animal e onivoro ou herbivoro? (onivoro/herbivoro): ").toLowerCase();
        if (dieta === 'onivoro') {
            console.log("O animal e um Homem.");
        } else if (dieta === 'herbivoro') {
            console.log("O animal e uma Vaca.");
        } else {
            console.log("Dieta invalida.");
        }
    } else {
        console.log("Tipo de animal invalido.");
    }

} else if (categoria === 'invertebrado') {
    let tipo = readline.question("O animal e inseto ou anelideo? (inseto/anelideo): ").toLowerCase();
    if (tipo === 'inseto') {
        let dieta = readline.question("O animal e hematofago ou herbivoro? (hematofago/herbivoro): ").toLowerCase();
        if (dieta === 'hematofago') {
            console.log("O animal e uma Pulga.");
        } else if (dieta === 'herbivoro') {
            console.log("O animal e uma Lagarta.");
        } else {
            console.log("Dieta invalida.");
        }   
    } else if (tipo === 'anelideo') {
        let dieta = readline.question("O animal e hematofago ou onivoro? (hematofago/onivoro): ").toLowerCase();
        if (dieta === 'hematofago') {
            console.log("O animal e uma Sanguessuga.");
        } else if (dieta === 'onivoro') {
            console.log("O animal e uma Minhoca.");
        } else {
            console.log("Dieta invalida.");
        }
    } else {
        console.log("Tipo de animal invalido.");
        
    }

} else {
    console.log("Categoria invalida. Use 'vertebrado' ou 'invertebrado'.");
}
