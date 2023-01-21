function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, "estoque", {
        enumerable: true,
        //value: estoque,
        //writable: false, 
        get: function () {
            return estoquePrivado;
        },
        set: function (value) {
            if (typeof value !== 'number'){
                throw new TypeError('Mensagem')
            }

            estoquePrivado = value;
        },
        configurable: true,
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true,
        }
    });

}

function criaProduto(nome){
    return{
        get nome() {
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    };
}
const p1 = new Produto("Camiseta", 20, 3);
p1.estoque = '500'
console.log(p1);

console.log(Object.keys(p1))

// Get pega o valor
// Set seta um valor