var possuiFaculdade = true;
if(possuiFaculdade){
    console.log("é verdadeiro");
}else{
    console.log('é falso')
}

//Else if, se o if for falso ele vai para proxima condicional, que no caso é elseif.
var possuiDoutorado = false;
var possuiGraduacao = true;

if(possuiDoutorado){
    console.log('possui graduação e doutorado');
}else if(possuiGraduacao){
    console.log("possui graduação, mas não possui doutorado")

}else{
    console.log("não possui graduação.");
}
//ele para na primeira vez em que dar true

//EXISTEM VALORES QUE RETORNAM TRUE E OUTROS QUE RETORNAM FAKSE QUANDO VERIFICAMOS EM UMA EXPRESSÃO BOOLEANA
//falsy
/**
 * if (false)
 * if(0)
 * if(NaN)
 * if(null)
 * if(undefined)
 * if('') //ou "" ou ``
 */

/**
 * o operador! nefa uma operação booleana que seja !true é igual a false e viceversa*/

if(!true);//false
if (!1);//false
if (!"");//true
if(!undefined);//true
if(!! ' ');//true
if(!!'');//false

//Switch verifica se uma variavel é igual a diferentes valores.
var corFavirita = 'azul';
switch (corFavirita){
    case 'azul':
        console.log('é azul');
        break;
    case 'amarelo':
        console.log('olhe para o sol');
    default:
        console.log("Feche os olhos")
}