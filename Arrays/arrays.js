// Capitulo II 
//Estudos sobre Arrays

//Dias da Semana

var dayOfDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/*for (let x = 0; x < dayOfDay.length; x++) {
    console.log(dayOfDay[x]);
}*/

//******************************/

//Sequência de Fibonacci

var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 2;

/*for(var i = 3; i <= 20; i++) {
    fibonacci[i] =  fibonacci[i-1] + fibonacci[i-2];
}

for(var i = 1; i < fibonacci.length; i++) {
   console.log(fibonacci[i]);
}*/

//******************************/

//Acresentando Elementos no Array

var numbers = [0,1,2,3,4,5,6,7,8,9];

//adicionando na ultima posição(não recomendável)
numbers[numbers.length] = 10;

//usando metodo push
numbers.push(11);

//adicionando na primeira posição 
for (let i= numbers.length; i >= 0; i--) {
    numbers[i] = numbers[i - 1];
}

numbers[0] = -1;

//adicionando na primeira posição com metodo unshift
numbers.unshift(-2);


//removendo com metodo pop na ultima posição
numbers.pop();

//removendo na primeira posição 
for (let i = 0; i < numbers.length; i++) {
   numbers[i] = numbers[i+1];
}

//removendo na primeira posição com metodo shift
numbers.shift();

//removendo em qualquer posição
numbers.splice(5,3);

//adicionando em qualquer posição 
numbers.splice(5,0,5,6,7);

console.log(numbers);
console.log('Length: ' + numbers.length);



