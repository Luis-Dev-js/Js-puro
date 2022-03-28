// Objetos:

console.log('..............Factory.............')


function criaPessoa(nome, sobreNome, idade) {
    return {
        nome,
        sobreNome,
        idade,
        fala(){
            return `Ola meu nome é ${this.nome} e eu tenho ${this.idade}.`;
            
        }
    }
}

const pessoa01 = criaPessoa('Ana', 'Candida', 32);
console.log(pessoa01.fala());

const pessoa02 = criaPessoa('Bruna', 'Santos', 18);
console.log(pessoa02.fala());

const pessoa03 = criaPessoa('Sofia', 'Caldeira', 9);
console.log(pessoa03);

