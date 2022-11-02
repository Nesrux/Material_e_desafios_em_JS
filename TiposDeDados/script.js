var nome = "kleber";
var idade = 28;
var time = null;//o type off de NULL sempre retornar como objeto.
console.log(typeof nome);//typeof "tipo de", verifica o tipo de dado.


var nome2 ="jurandir";
var sobrenome ="Elias";
var nometodo = nome2 + "" + sobrenome;
console.log(nometodo);

var gols = 1000;
var frase = 'jaum é ' +gols +  "gols";
console.log('frase');

var frase2 = "joao é foda \" bazinga \"";//o \faz com que o caractere especial seja desconsiderado, e o js leia só como caractere
console.log(frase2);

//template String
//exemplo sem.
var frase3 = "neymar me decepcionou, mas fez";
var golaco = 1000;
console.log(frase3+golaco+"gols em sua carreira");

//exemplo com
var rmaio = `neymar me decepcionou, mas fez ${golaco} gols em sua carreira`
console.log(rmaio);