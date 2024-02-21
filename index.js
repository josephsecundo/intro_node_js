console.log("Hello World");

// variavel para inserir nome
let nome = "José";

// executar nome
console.log (nome);

// var para iidade e altura
let idade = 34;
let altura = 1.72;

console.log('nome:  ' + nome + ' idade: ' + idade + ' anos');


// indica se é falsa ou verdadeira
let trabalha = true;

console.log(trabalha);
console.log('Trabalha: '+ trabalha === true ? 'Sim' : 'Não');

if (trabalha === true){
    console.log('Trabalha: Sim')
}else {
    console.log('Trabalha: Não');
}


//indica se é uma array ou não.
console.log ((Array.isArray(trabalha)) ? 'Array' : 'Não é Array');