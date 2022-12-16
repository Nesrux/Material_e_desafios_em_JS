// const Dom = {
//     seletor: 'li',
//     Element(){
//         return document.querySelector(this.seletor);
//     },
//     ativar(){ 
//         this.Element().classList.add('Ativar');
//     }
//}

  function Dom (seletor){
    this.element = function (){
        return document.querySelector(seletor);
    }
    this.ativar = () =>{
        this.element().classList.add('Ativar');
    }
}



const li = new Dom('li');
const ul = new Dom('ul');

const LastLi = new Dom('li:last-child');
LastLi.ativar();