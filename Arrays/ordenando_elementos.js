//Capitulo II 
//Ordenando Elementos

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var numbersEmbaralhado = [5,8,3,2,1,9];

numbers.reverse(); // inverte a ordem do array(decrescente)

numbersEmbaralhado.sort((a,b) => {return a-b}); // deixando o array em ordem crescente

//ORDENAÇÃO PERSONALIZADA 

var friends = [
    {name: 'John', age:30},
    {name: 'Ana', age:20},
    {name: 'Chris', age:25}
];

function compare(a,b) {
   if (a.age < b.age) {
       return -1;
   }
   if (a.age > b.age) {
       return 1;
   }

   return 0;
}

//console.log(friends.sort(compare));

//ORDENANDO STRINGS

var names = ['Ana', 'ana', 'john', 'John'];

//names.sort(); //saida: ["Ana", "John", "ana", "john"]

//correção para ordem crescente com string 

names.sort(function(a,b){
    if (a.toLowerCase() < b.toLowerCase()) {
         return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
         return 1;
    }
    return 0;
});

//strings com acentos 
var names2 = ['Maéve', 'Maeve'];

names2.sort(function(a,b){
    return a.localeCompare(b);
});





