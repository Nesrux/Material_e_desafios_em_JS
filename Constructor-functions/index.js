/**Para isso existem as Constructor Functions, ou seja, funçoes Construtoras que são 
 * responsaveis por construir novos objetos sempre que 
 * chamamos a mesma.
 */

function Carro (){
    this.marca = 'Marca';
    this.preco = 0;
}
//this se refere a propria função
//como se eu tivesse falando Carro.preco;

const honda = new Carro();
honda.marca = 'honda';
honda.preco = '2000';

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;

//Usar o pascoal case,  para definir funçoes contrutoras
//pascoal case é definido com a primeira letra em maiuscula

/**     NEW KEYWORD
 * a palavra chave new é responsavel por criar um novo objeto
 * baseadona função que passarmos a frente
 */

const porshe = new Carro;

// // 1 cria um novo objeto vazio
// honda = {};

// // 2 define o protótipo
// honda.prototype = Carro.prototype;

// // 3 Aponta a variaveis This para  o objeto
// this. honda;


// //4 Executa a função, substituindo This pelo Objeto.
// honda.marca = 'marca';
// honda.preco = 0;

// //retorna um novo objeto
// return honda = {
//     marca: 'marca',
//     preco: 0,
// }

function Veiculo(preco, tamanho, portas, step) {
    this.preco = preco;
    this.tamanho = tamanho;
    this.portas = portas;
    this.step = step;
}
const carrao = new Veiculo('caro', 'grande', '4', true);

const bicleta = new Veiculo('barato','pequeno', 0, false);

// o this faz referencia ao proprio objeto construido com a contructor funcion

function carroGrande (marca, precoInicial){
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
}
const mazda = new carroGrande ('mazda', 500);