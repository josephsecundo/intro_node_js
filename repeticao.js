// let entrada = require('prompt-sync')();


// let idade = entrada ('Digite sua idade: ')
// let idadeInt = parseInt(idade);

// if (idadeInt < 18) {
//     console.log('Menor');
// } else if (idadeInt === 18) {
//         console.log('Tem 18');
// } else {
//     console.log('Maior');
// }

// let num = parseInt(entrada('Digite um número para visualizar a tabuada!'));

// let cont = 1;

// while (cont <= 10) {
//     let calc = num * cont;
//     console.log(`${num} x ${cont} = ${calc}`);
//     cont++;
// }

// for (let cont = 1; cont <=10; cont++){
//     let calc = num * cont;
//         console.log(`${num} x ${cont} = ${calc}`);
// }

// const senha = '123456';
// let cont = 0;
// // do {    
//     var senhaDig = entrada('Digite a senha para acessar o sistema: ');
//     } while(senha !== senhaDig);


// do {
//     if (cont === 3) {
//         break;
//     }
//     cont++;
//     var senhaDig = entrada('Digite a senha para acessar o sistema: ');
// }
// while (senhaDig !== senha);

// if (cont >= 3) {
//     console.log('Acesso não autorizado');
// }
// else {
//     console.log('Acesso autorizado');
// }


// entrada();

// let sn = '123456';
// let snDg = '';

// while (sn ==! snDg) {
//     snDg = entrada ('Digite a senha para acessar o sistema: ');
// }

// const senha = '123';
// let cont =0;

// for (cont ; cont <3; cont++){
//     var snDig = entrada('Digite sua senha: ');
//     if (snDig == senha){
//         console.log('Acesso liberado')
//         break;
//     }
   
    
// }
// if(cont==3){
//     console.log('Acesso negado')
//     } 

let entrada = require('prompt-sync')();

let senha = '1234';
let snCorreta = false;

for (let index = 1; index <=3; index++){
    const snDg = entrada ('Digite sua senha: ');
    if (senha===snDg){
        snCorreta = true;
        break;
    }
}

console.log(snCorreta ? 'Acesso autorizado' : 'Acesso negado');
entrada();
