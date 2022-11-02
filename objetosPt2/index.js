var nome = 'joao';

var nomeMinusculo = nome.toLocaleLowerCase;

console.log(nomeMinusculo);
//1h e 10 segundos

var altura = 123.8;
var alturaString = altura.toLocaleString();//transforma para string
 var alturaFizada = altura.toFixed();// transforma para 124

 //Por um breve momento o número é envolvido em um Objeto.
 //(coerção), tendo acesso assim as suas propriedades e métodos.

 function areaQuadrado(lado){
    return lado * lado
 }

 areaQuadrado.toString();
//"function areaQuadrado(lado){
//"return lado * lado
//}"

//Transformou tudo em uma String

//areaQuadrado.length();// vai me deovlver 1 pq é o taltal de argumentos que a função possuí no caso "lado"

/**             ELEMENTOS DO DOM
 * praticamente todos os efeitos
 * com js são feitos ultilizando propriedades e métodos de objetos do DOM
 */

var btn = document.querySelector('.btn');