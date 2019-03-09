//Capitulo II 
//Estudos sobre as novas funcionalidades de Array ES6 e ES7

//INTERANDO COM LAÇO FOR..OF

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for (let n of numbers) {
   //console.log((n % 2 == 0) ? 'even' : 'odd');
}

//NOVO INTERADOR @@iterador

let iterador = numbers[Symbol.iterator]();
//console.log(iterador.next().value);
//console.log(iterador.next().value);
//console.log(iterador.next().value);
//console.log(iterador.next().value);
//console.log(iterador.next().value);

//saida: 1,2,3,4,5

//METODOS ENTRIES, KEYS E VALUES

//entries
let aEntries = numbers.entries(); //obtém iterador de chave/valor

//console.log(aEntries.next().value); // [0 , 1]

//key
let aKeys = numbers.keys(); //obtém iterador de chaves
//console.log(akeys.next());  //{ value: 0, done: false}

//values
let aValues = numbers.values();
//console.log(aValues.next()); // { value: 1, done: false }

//MÉTODO FROM 
//cria uma novo array a partir de um array existente 

let numbers2 = Array.from(numbers);

//criar um novo array, e filtra os valores que passamos
let evens = Array.from(numbers, x => (x % 2 == 0));

//USANDO ARRAY.OF
//metodo Array.of cria um novo array a partir dos argumentos passados 

let numbers3 = Array.of(1,2,3,4);

//USANDO MÉTODO FILL

let numbersCopy = Array.of(1,2,3);

numbersCopy.fill(0); //saida ([0,0,0])

//USANDO O MÉTODO COPYWITHIN
//copia uma sequência de valores do array para posição de um índice de início

let copyArray = [1,2,3,4,5,6];

copyArray.copyWithin(0,3);

console.log(copyArray);





