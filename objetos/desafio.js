// Crie um objeto com seus dados pessoais
//deve possuir pelo menos duas propriedades nome e sobrenome
var jaum = {
    nome: 'joao',
    sobreNome: 'marcos',
    apelidoNasRedes: 'eiske'
}

//crie um método no objeto anterioro, que mostre o seu nome Completo

jaum.nomecompleto = ()=>{
    return `${this.nome} ${this.sobreNome}`
}

//modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4, 
    marca: 'audi',
}
carro.preco = 3000;

//crie um objeto de um cahorro que represente um çabrador
//preto com 10 anos, que late ao ver um homem.
var cachorro = {
    raca: 'labrador', 
    idade: '10 anos',
    cor: 'preto',
    latir(pessoa){
        if (pessoa === 'homem'){
            return 'AuAuAu';
        }
        else{
            return 'Nada';
        }
    }
}