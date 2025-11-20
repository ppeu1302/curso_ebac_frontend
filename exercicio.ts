const multiplica = (x:number, y:number): number => x * y;

console.log("O resultado da multiplicação é =",multiplica(4, 5));

class Pessoa {
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    dizOla(): string{
        return `Olá ${this.nome}`;
    }
}

const pessoa1 = new Pessoa("Pedro");

console.log(pessoa1.dizOla());