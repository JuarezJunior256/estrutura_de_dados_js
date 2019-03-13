//Capitulo III
//Pilhas com Symbols no Escopo 

class Stack{
    
    constructor () {
       this.items = []; //estrutura de dados array vazia 
    }
    

   //EMPILHANDO ELEMENTOS NA PILHA

   push(element) {
    //add um novo item   
    this.items.push(element);
   }

   //DESEMPILHANDO ELEMENTOS DA PILHA

   pop() {
       //remove item do topo da pilha
       return this.items.pop();
   }

   //DEVOLVENDO ITEM NO TOPO DA PILHA

   peek() {
       //devolve elemento que está no topo da pilha
       return this.items[items.length - 1];
   }

   //VERIFICANDO SE A PILHA ESTÁ VAZIA

   isEmpty() {
       //devolve true se a pilha não contiver elemento e false se for > que 0
       return this.items.length == 0;
   }

   //TAMANHO DA PILHA

   size() {
       // devolve o numero de elementos contidos na pilha
       return this.items.length;
   }

   //LIMPANDO O ARRAY

   clear() {
       //remove todos elementos da pilha
       this.items = [];
   }

   //EXIBINDO ITEMS DA PILHA

   print() {
       //mostrar itens da pilha
       console.log(this.items.toString());
       
   }
}