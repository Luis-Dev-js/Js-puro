// basico array

const alunos = [
    'Luis', 'Ana', 'Bruna', 'Solange', 'Pedro'
]
console.log(alunos);
console.log(alunos[1]);

// 
console.log('Inserindo item no inicio da lista: ');
alunos.unshift('Luana', 'Karine', 'Helena');
console.log(alunos);


console.log('Inserindo item no fim da lista: ');
alunos.push('Karen');
console.log(alunos);


console.log('Tamanho da lista: ');
const range = alunos.length;
console.log(`==> Essa lista tem ${range} alunos.`);


console.log('Excluindo o ultimo item da lista: ');
alunos.pop('Karen');
console.log(alunos);

console.log('Excluindo o primeiro item da lista: ');
const removidoInicio = alunos.shift();
console.log(alunos);
console.log(`A ${removidoInicio} foi removido.`);

console.log(typeof alunos);
console.log( alunos instanceof Array);