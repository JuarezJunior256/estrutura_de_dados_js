//Capítulo III
//Pilhas

//CRIANDO UMA PILHA

function Stack(){
    let items = []; //estrutura de dados array vazia 

   //EMPILHANDO ELEMENTOS NA PILHA

   this.push = function(element) {
    //add um novo item   
    items.push(element);
   };

   //DESEMPILHANDO ELEMENTOS DA PILHA

   this.pop = function() {
       //remove item do topo da pilha
       return items.pop();
   };

   //DEVOLVENDO ITEM NO TOPO DA PILHA

   this.peek = function() {
       //devolve elemento que está no topo da pilha
       return items[items.length - 1];
   };

   //VERIFICANDO SE A PILHA ESTÁ VAZIA

   this.isEmpty = function() {
       //devolve true se a pilha não contiver elemento e false se for > que 0
       return items.length == 0;
   };

   //TAMANHO DA PILHA

   this.size = function() {
       // devolve o numero de elementos contidos na pilha
       return items.size();
   };

   //LIMPANDO O ARRAY

   this.clear = function() {
       //remove todos elementos da pilha
       items = [];
   };

   //EXIBINDO ITEMS DA PILHA

   this.print = function() {
       //mostrar itens da pilha
       console.log(items.toString());
       
   };
}

//USANDO A CLASSE STACK 

let stack = new Stack();

console.log(stack.isEmpty());
