let entrada = require('prompt-sync')();


// let idade = entrada ('Digite sua idade: ')
// let idadeInt = parseInt(idade);

// if (idadeInt < 18) {
//     console.log('Menor');
// } else if (idadeInt === 18) {
//         console.log('Tem 18');
// } else {
//     console.log('Maior');
// }

let num = parseInt(entrada('Digite um número para visualizar a tabuada!'));

// let cont = 1;

// while (cont <= 10) {
//     let calc = num * cont;
//     console.log(`${num} x ${cont} = ${calc}`);
//     cont++;
// }

for (let cont = 1; cont <=10; cont++){
    let calc = num * cont;
        console.log(`${num} x ${cont} = ${calc}`);
}

