var idade = 21e10;//o e dps do número são a quantodade de zeros que vem depois dele, tipo totação cientfica.
console.log(idade);

var soma, subtracao, multiplicacao, divisao, expoente, modulo
soma = 1+1;//soma
subtracao =3-2;//divisao
multiplicacao = 3*3;//multiplicacao
divisao = 10/5;//divisao
expoente = 2 ** 3 //potenciacao, primero é o expoente dps é oque esta sendo exponenciado
modulo = 15 % 2;// modulo vai ser o resto inteiro que sobra de uma divisao.
console.log(modulo);


var divisaoisnan = 'comprei um queijo'/2;
console.log(divisaoisnan);
//ele devolve um IsNan que é "not a number";
console.log(isNaN(divisaoisnan)); //retorna um nan;

//Operadores de matematicos unarios
//incremento
var incremento = 10;
console.log(incremento++);//assim ele só encrementa dpos do codigo rodar
console.log(incremento);

var incremento2 = 12;
console.log(++incremento2);// assim ele incrementa antes de dar o log.

//decremento é a mesma coisa só com menos, ou seja diminui;
var decremento = 456;
console.log(--decremento);
