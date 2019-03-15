//Capitulo IV 
// Fila Circular (Simulaçao do jogo Batata Quente)

function Queue() {
    let items = [];

    
    this.enqueue = function(element) {
        items.push(element);
    }

    this.dequeue = function() {
        return items.shift();
    }

    this.front = function() {
        return items[0];
    }

     this.isEmpty = function() {
        return items.length == 0;
    }

    this.size = function() {
        return items.length;
    }

    this.print = function() {
        console.log(items.toString());
    }
}

function hotPotato(nameList, num) {
    let queue = new Queue();

    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    let eliminated = '';
    while (queue.size() > 1) {
       for (let i = 0; i < num; i++) {
         queue.enqueue(queue.dequeue());
       }

       eliminated = queue.dequeue();
       console.log(eliminated + 'was eliminated from the Hot Potato game.');
    }

    return queue.dequeue();
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let winner = hotPotato(names, 7);
console.log('the winner is: ' + winner);
