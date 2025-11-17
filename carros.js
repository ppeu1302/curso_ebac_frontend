function Concessionaria(marca){
    this.marca = marca;
}

function Carro(marca, modelo, valor){
    this.modelo = modelo;
    //this.salario = salario;

    let _valor = valor;

    //getters e setters
    this.getValor = function(){
        return _valor;
    }

    this.setValor = function(valor){
        if(typeof valor === 'number'){
            _valor = valor;
        }
    }

    this.aumento = function(){
        const alteracaoDeValor = valor * 1.1;

        valor = alteracaoDeValor;
    }

    this.dizModelo = function(){
        console.log(this.modelo);
    }

    Concessionaria.call(this, marca);
}

function CarroPopular(marca){
    Carro.call(this, marca, "Kwid", 70000);

    this.aumento = function(){
        const alteracaoDeValor = this.getValor() * 1.07;
        this.setValor(alteracaoDeValor);

    }
}

function CarroDeLuxo(marca){
    Carro.call(this, marca, "2022", 1000000);

    this.aumento = function(){
        const alteracaoDeValor = this.getValor() * 1.15;
        this.setValor(alteracaoDeValor);

    }
}

const carro1 = new Carro("Ford", "Mustang", 500000);
const carro2 = new CarroPopular("Kwid");
const carro3 = new CarroDeLuxo("Lamborghini");


carro1.aumento();
console.log(carro1.getValor());

carro2.aumento();
console.log(carro2.getValor());

carro3.aumento();
console.log(carro3.getValor());