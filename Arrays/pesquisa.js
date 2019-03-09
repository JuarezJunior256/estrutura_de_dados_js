//Capitulo 
//Pesquisa

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
numbers.indexOf(10); // devolve o indice do primeiro elemento correspondendo ao argumento passado

var numbers2 = [1,2,3,4,5,6,7,8,9,10,10,11,12,13,14,15];
numbers2.lastIndexOf(10); // devolve o indice do ultimo elemento correspondendo ao argumento passado

//MÉTODOS FIND E FINDINDEX
var numbers3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function multipleOf13(element, index, array) {
  return (element % 13 == 0) ? true : false;
}

//devolver o primeiro valor do array que satisfaça a condição proposta
//console.log(numbers3.find(multipleOf13)); 

//devolve o indice do primeiro valor do array que satisfaça a condição 
//console.log(numbers3.findIndex(multipleOf13));


//CONVERTENDO UM ARRAY EM UMA STRING

var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//console.log(num.toString()); //convertendo em string

var numberString = num.join(', ') //separando elementos 
console.log(numberString);

