// Classe base (abstração)
function Suco(sabor, tamanho, marca, preco) {
    this.sabor = sabor;
    this.tamanho = tamanho;
    this.marca = marca;
    this.preco = preco;

    this.beber = function() {
        return `Você está bebendo um suco de ${this.sabor}.`;
    };

    this.agitar = function() {
        return `Agitando o suco de ${this.sabor}...`;
    };

    this.getTipoSuco = function() {
        return this.tipo;
    };
}

Suco.prototype.getDescricao = function() {
    return `O suco de ${this.sabor} (${this.tamanho}), da marca ${this.marca}, é do tipo ${this.getTipoSuco()}.`;
};

function SucoNatural(sabor, tamanho, marca, preco) {
    Suco.call(this, sabor, tamanho, marca, preco);
    this.tipo = "Natural";
}

SucoNatural.prototype.getDescricao = function() {
    return `Suco natural de ${this.sabor} (${this.tamanho}), da marca ${this.marca}, custa R$${this.preco}.`;
};


function SucoIndustrializado(sabor, tamanho, marca, preco) {
    Suco.call(this, sabor, tamanho, marca, preco);
    this.tipo = "Industrializado";
}

SucoIndustrializado.prototype.getDescricao = function() {
    return `Suco industrializado sabor ${this.sabor} (${this.tamanho}), da marca ${this.marca}, custa R$${this.preco}.`;
};


const suco1 = new SucoNatural("Laranja", "300ml", "Do Campo", 5);
const suco2 = new SucoIndustrializado("Uva", "1L", "Del Valle", 8);
const suco3 = new SucoNatural("Abacaxi", "500ml", "Do Campo", 6);


console.log(suco1);
console.log(suco2);
console.log(suco3);

console.log(suco1.getDescricao());
console.log(suco2.getDescricao());
console.log(suco3.getDescricao());

console.log(suco1.beber());
console.log(suco2.agitar());
