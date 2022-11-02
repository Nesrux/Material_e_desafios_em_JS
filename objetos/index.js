/**
 *              OBJETOS
 * Conjunto de variaveis e funçoes, que são chamadas de propriedades e métodos
 *EX: 
 */
var pessoa = {
    nome: 'joão',
    idade: 13,
    profissao: 'Programador',
    possuiFaculdade: true
}

pessoa.nome;// devolve 'andré'
pessoa.possuiFaculdade; //Devolve true

//Métodos
//é uma propriedade que possui uma função no local do seu valor

var quadrado = {
    lados: 4,
    area: (lado)=>{
      return lado * lado
    },
    perimetro: (lado) => {
      return lado * 4
    }
}
console.log(quadrado.area(5));
console.log(quadrado.perimetro(4));

//Organizar o código
//objetos servem para organizar o código em pequenas partes reutilizaveis

//criar um objeto
// um objeto é criado ultilizando as chaves {}

var carro = {};
var pessoa = {};

console.log(typeof carro);

//Dot notation GEt //notação de ponto
//mesma ideia do java

var menu = {
  width: 200, 
  height: 50,
  backgoundColor: '#84E'
}
menu.backgoundColor = '#fff';
var bg = menu.backgoundColor;

//  palavra chave: THIS
//this irá fazer uma referencia ao próprio objeto.

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight(){
    return this.height / 2;
  }
}
menu.metadeHeight();// 25
// sem o this, seria 60
//this retorna o valor do objeto

/**
 * Protótipo e Herança
 * o objeto herda propriedades e metodos do objeto que foi utilidado para criar o mesmo
 */
 var lulu = {
  gostoMeioRoxo: true,
  Polimorf: true, 
  DestruidoraDeAsassinoLixeira: true,
  numeroDeKilss: 1987784786545645
 }
 // todo objeto é feito pela função object do js, que  por sua vez trás metodos
 //de heraça como
 lulu.hasOwnProperty('gostoMeioRoxo');