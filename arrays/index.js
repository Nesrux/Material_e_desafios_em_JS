/**
 *             ARRAY
 * é um grupo de valores geralmente relacionados. Servem para
 * guardarmos diferentes valores ek  uma única variavel.
 */

var videoGames = ['Swich', 'ps5', 'Xbox'];//array é com conchetes, e pode mistural tipos de dados ou objetos.


videoGames[0]//switch
videoGames[2] //xbox

videoGames.pop();//Remove o último item e retorna ele
videoGames.push('3ds');//adiciona ao final da array
videoGames.length;//devolve 3

/**
 * For Loop
 * fazem algo repetidamente até que uma condição seja atigida.
 */

for (var numero = 0; numero <= 10; numero++){
   console.log(numero);
}

//o For loop possui 3 partes, [inicio], [condição] e [incremento]

//while lopp
var i = 0;
while (i < 10){
   console.log(i);
   i = i + 5
}//vai retornar de 0 a 9 no console
//o for loop é maios comun

//Arrays e loops
var videoGames2 = ['Swich', 'ps5', 'Xbox', '3DS'];
for (var i = 0; i < videoGames.length; i++ ){
   console.log(videoGames[i]);
}

//BREAk
//o loop irá parar caso encontro  e palavra BREAk

var videoGames3 = ['ps1', 'ps2', 'ps3','ps4', 'ps5' ];
for(var i = 0; i < videoGames3.length; i++){
   console.log(videoGames3[i]);
   if (videoGames3[i] === 'ps4'){
      break;
   }
}

/**
 *       ForEach
 * forEach é um método que executa uma função para cada item da array.
 * é uma forma mais simples de ultilizarmos um loop com arrays (ou array -like)
 */
 var videoGames4 = ['xbox', 'xbox360', 'xboxOne','XboxSeriesX', 'Xbox2' ];
 videoGames4.forEach(function(item){
   console.log(item);
 })
//podemos passar os seguintes parametros [item], [index], [array]