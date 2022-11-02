//Responsaveis por guardar dados na memoria
//inicia com a palavra VAR, LET ou CONST
var nome ="jaum";
var idade = 20;
var possifaculdae = true;

console.log(nome, idade, possifaculdae);


var preço = 25;
var totalPreco = 5;
var tudoXpreço = preço *totalPreco;

//declaralção de variaveis na mesma linha
var sobrenome ="rafael", 
cidade = "Rio de janeiro", 
dinheiro = true;

console.log(sobrenome, cidade, dinheiro);

//undefinid
var semDefinir;
console.log(semDefinir);


//dar um .log em uma variavel que não existe da erro
console.log(bazinga);


//Hoisting, o js joga sua variavel para cima, mas ela fica com o undefined EX
//retorna como indefinido.
console.log(pizza);
var pizza ="sim";

//mudar o valor atribuido é possivel mudar esses valores  de variaveis declaradas com
//Var e Let. Porém não é possivel modificar valores das declaradas com const
var idade2 = 28;
idade2 = 19;

let preco = 58;
preco = 25;

const faculTem = true;
faculTem = false;//Retorna um erro