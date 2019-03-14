//Capitulo IV
//Fila

function Queue() {
    let items = [];

    //add um novo item ao final da fila
    this.enqueue = function(element) {
        items.push(element);
    }

    //remove intens da fila
    this.dequeue = function() {
        return items.shift();
    }

    //retorna o primeiro item da fila
    this.front = function() {
        return items[0];
    }

    //verificando se a fila está vazia
    this.isEmpty = function() {
        return items.length == 0;
    }

    //retorna tamanho da fila
    this.size = function() {
        return items.length;
    }

    //mostra no console dados da fila
    this.print = function() {
        console.log(items.toString());
    }
}





