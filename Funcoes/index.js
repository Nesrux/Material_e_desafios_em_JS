//funÇoes
//bloco de codigo que pode ser executado e reutilizado. valores podem ser passados por uma função e a mesma retorna outro valor.
function areaQuadrado(lado){
    return lado * lado;
}
console.log(areaQuadrado(2));

function pi (){
    return 3.1415;
}

var total = 5*pi();

console.log(total);

/**
 *    PAREMETROS E ARGUMENTOS
 * ao criar uma função, voce pode definir parametros
 * ao executar uma função, voce pode passar argumentos.
 */
//Exmplo

function imc (peso, altura){
    const imc = peso /(altura*2);
    return imc;
}

console.log(imc(30, 180));
console.log(imc(100, 1.94));


function corFavorita(cor) {
    if (cor === 'azul'){
        return 'voce gosta de céu';
    } else if (cor === 'verde'){
        return 'voce gosta de mato';
    }else {
        return 'voce não gosta de nada';
    }
}
console.log(corFavorita('azul'));

//Argumentos podem ser funÇoes

//chamadas de Callback, geralmente são funçoes que ocorrem após algum evento.

addEventListener('click', ()=>{console.log('olá')});{
    console.log('clicou');
}
//a função possui dois argumentos
//primeiro é a String 'click'
//segundo é uma função anonima

/**
 * funçoes anonimas são aquelas em
 * que o nome da função não é definido, esctrias como
 * function(){} ou () => {}
 */

//quando não definimos o return, ela ira retornar undefined. o codigo interno da funcão
//é executado normalmente, independente de existir o valor de retrun ou não;

function ladoXlado (lado1, lado2){
    const ladoXlado = lado1 * lado2;
    console.log(ladoXlado);
}
ladoXlado(20, 20);// retona o lado
console.log(ladoXlado(22, 20))//return o lado e undefined

//NÃO É UMA BOA PRATICA TER UMA FUNÇÃO QUE DEVOLVE VARIOS TIPOS DE dados.

function terceiraIdade(idade){
    if(typeof idade !== 'number'){//validação se qualque coisa for diferente de um número, ele executa essa,  mas também daria pra ser um
      return 'preencha um número'//==NaN
    }
    else if(idade >= 60){
        return true;
    }
    else {
        return false;
    }
    console.log("a");// depois que apareceu um return,o resto do código não é mais acessado, esse console.log nunca vai ser executado.

}
console.log(terceiraIdade('a'));

//Por causa do escopo eu não vou poder acessar o totalPaises em qualquer outro lugar do código.
function faltaVisitar(paisesVistados){
    var totalPaises = 193;
    return `Faltam Visitar ${totalPaises - paisesVistados} paises `
}
//                              Escopo lexo
//Funções conseguem acessar variaveis que foram declaradas no contexto pai EX

var profissao = 'designer'
function dados(){
    var nome = 'joao';
    var idade = 19;
    function outrosDados(){
        var endereco = 'Nossa Senhora de Guadalupe';
        var idade = 23;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`

    }
    return outrosDados();
}
console.log(dados())// retorna 'joao', '19', 'nossa senhora de guadalupe'
outrosDados() //retorna um erro.