//transfore o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome Pessoa',
    idade: 0,
    andar(){
        console.log(this.nome + 'andou');
    }
}

//Transformando
function Humano (nome,idade) {
    this.nome = nome,
    this.idade = idade,
    this.andar =() => {
        return console.log(`${this.nome} andou mesmo tendo ${this.idade} anos`);
    }
}

//Crie 3 pessoas, joao -20 anos
// maria 25 anos, bruno 15 anos

const joao = new Humano('João', 21);
const maria  = new Humano('Maria', 25);
const bruno = new Humano('Bruno', 15);
const SemNome = new Humano ('', 21);
const Semidade = new Humano ('getulio',);
const SemNada = new Humano ('' ,'');

//crie uma constructor function  para manipulação do dom
//listas de elemento do dom, deve conter as seguintes porpiedades

function Dom (seletor){
    const elementList = document.querySelectorAll(seletor);

    this.element = elementList;
    this.addClass = (classe) => {
        elementList.forEach((element) => {
            element.classList.add(classe);
        })
    }
}

//Esse foi o constructor Function 2
//Agora é o prototype 1
