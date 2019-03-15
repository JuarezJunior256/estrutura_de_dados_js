//Capitulo IV
//Fila com Prioridade

function PriorithyQueue() {
    let items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element, priority) {
        let queueelement = new QueueElement(element, priority);

        let added = false;
        for (let i = 0; i < items.length; i++) {
            if (queueelement.priority < items[i].priority){ //2
                items.splice(i, 0, queueelement);//3
                added = true;
                break;//4
            }
        }

        if (!added) {
            items.push(queueelement);//5
        }
    };

    this.print = function(){
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`);
            
        }
    };

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
}



