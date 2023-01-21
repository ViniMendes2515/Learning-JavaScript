// defineProperty - uma propriedade
// defineProperties - mais de uma propriedade

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, "estoque", {
        enumerable: true, // Mostra as chaves
        value: estoque, //valor das chaves
        writable: false, // Pode alterar o valor ou não
        configurable: true, // Configuravel(criar outra defineProperty) e pode reconfigurar a variavel
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
const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);

console.log(Object.keys(p1))