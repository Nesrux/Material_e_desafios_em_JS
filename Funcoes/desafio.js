//crie una função para verificar se um valor é Truthy
function ValidarValor(valor){
    return !!valor
}
//Crie uma função matemática que retorna o perimetro de um quadrado
//lembrando: perimetro é a soma dos lados do quadrado.

function perimetro(lado){
    return `o perimetro é ${lado * 4}`
}


//crie uma função que retorne o seu nome completo, ela deve possuir
// os parametros, nome e sobrenome
function nomeCompleto(nome, sobrenome){
    return console.log(`${nome} ${sobrenome}`);
}


//crie uma função que verifique se o número é par
function ePar(n1){
    var modulo = n1 % 2;
    if (modulo == 0 ){
        return 'esse número é par';
    }
    else {
        return 'esse número é impar';
    }
}

//crie uma função que retona o tipo de dado
//dado do argumento passado nela
function temDado(dado){
    return typeof dado;
}

// use o addEventListener para digitar seu nome no console toda vez que vc usar o scroll do mause
addEventListener('scroll', () => {
    console.log('joão marcos');
});