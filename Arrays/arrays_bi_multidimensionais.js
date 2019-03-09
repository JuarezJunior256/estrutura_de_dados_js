//Capitulo II 
//Estudos sobre arrays bidimensionais e multidimensionais

//OBS: JavaScript não aceita matrizes, aceita apenas arrays unidimensionais 

//exemplo de arrays multidimensionais usando arrays de arrays com js

var averageTemp = [];
//dia 1
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;

//dia 2
averageTemp[1] = [];
averageTemp[1][0] = 72;
averageTemp[1][1] = 75;
averageTemp[1][2] = 79;
averageTemp[1][3] = 79;
averageTemp[1][4] = 81;
averageTemp[1][5] = 81;

//printMatrix(averageTemp);

//interando arrays bidimensionais com uma função genérica
function printMatrix(myMatrix) {
     for (let i = 0; i < myMatrix.length; i++) {
        for (let x = 0; x < myMatrix[i].length; x++) {
            //console.log(myMatrix[i][x]);
        }
     }
}

//******************************/

//Criando Arrays multidimensional com 3 arrays
var matrix3 = [];

for (let i = 0; i < 3; i++) {
    matrix3[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix3[i][j] = [];
        for (let z = 0; z < 3; z++) {
            matrix3[i][j][z] = [];
        } 
    }
}
//interando array multidimensional com 3 arrays
for (let i = 0; i < matrix3.length; i++) {
    for (let j = 0; j < matrix3[i].length; j++) {
        for (let z = 0; z < matrix3[i][j].length; z++) {
             //console.log(matrix3[i][j][z]);
        }
    }     
}

//******************************/

//Juntando vários arrarys com metodo concat

var zero = 0;
var positiveNumbers = [1,2,3];
var negativeNumbers = [-3,-2,-1];

//var numbers = negativeNumbers.concat(zero, positiveNumbers);

//console.log(numbers);

//******************************/

//Funções de interação

var isEven = function (x) {
    //devolve true se o x for multiplo de 2

    console.log(x);
    if (x % 2 == 0) {
        return true;
    }else{
        return false;
    }
    
};

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

numbers.every(isEven); //intera até o primeiro false

numbers.some(isEven);  //intera até o primeiro true

var myMap = numbers.map(isEven); //função map recebe uma função como parametro e faz uma mapeamento do array

var evenNumbers = numbers.filter(isEven); //retorna todas true

var newNumbers = numbers.reduce(function(previous, current, index) {
  return previous + current;
});

//console.log(newNumbers);

