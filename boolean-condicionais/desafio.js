//verifique se a sua idade é maior do que de algum parente
//Dependendo do resultado coloque no console 'é maior', 'éigual' ou 'é menor'
var idadeJoao = 20;
var idadeMaeJoao = 59;
if(idadeJoao < idadeMaeJoao){
    console.log('é menor');
}


//qual valor é retornado na seguinte expressão?

var expressao = (5-2) && (5 - ' ') && (5-2);//aparecerá 3, pois e  o primeiro valor que apareceu

//verifique se as seguintes variaveis são truthy ou falsy
var nome = 'andrew'; //truthy
var idade = 28; //truthy
var possuiDoutorado = false; //falsy
var empregoFuturo;//falsy
var dinheiroNaconta = 0;//false


//compare o toatal de habitantes do Brasil com a china (valor em milhões)
var brasil = 207;
var china = 1340;
if(china > brasil){
    console.log('a china é maior em habitantes')
}

//o que irá aparecer no console?
if('gato'=== 'gato'&& (5>2)){
    console.log("verdadeiro");//aparecerá verdadeiro;
}else{
    console.log('false');
} 