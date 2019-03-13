//Capítulo III
//Pilhas

//CRIANDO UMA PILHA

function Stack(){
    let items = []; //estrutura de dados array vazia 

   //EMPILHANDO ELEMENTOS NA PILHA

   this.push = function(element) {
    items.push
   }

   //DESEMPILHANDO ELEMENTOS DA PILHA

   this.pop = function() {
       return items.pop();
   }

   //DEVOLVENDO ITEM NO TOPO DA PILHA

   this.peek = function() {
       return items[items.length - 1];
   }

   //VERIFICANDO SE A PILHA ESTÁ VAZIA

   this.isEmpty = function() {
       return items.length == 0;
   }
}


push(element(s));// add um novo item
pop();// remove item do topo da pilha
peek();// devolve elemento que está no topo da pilha
isEmpty()// devolve true se a pilha não contiver elemento e false se for > que 0
clear();// remove todos elementos da pilha
size();// devolve o numero de elementos contidos na pilha

