//Capitulo V
//Lista Ligada

function LinkedList() {

    let Node = function(element) {
        this.element = element;
        this.next = null;
    }

    let length = 0;
    let head = null;

    // add um novo item no final da lista
    this.append = function(element) {
        
        let node = new Node(element),
        current; //2

        if (head === null) { // primeiro nó da lista
          head = node;
        } else {

            current = head; //4

            // percorre a lista com um laço até encontrar o ultimo item 
            while (current.next) {
                current = current.next;
            }

            //obtem o ultimo item e faz next receber node para fazer a ligação 
            current.next = node; //5
        }

        length++; //atualiza o tamanho da lista //6
    };

    // remover um item da lista pela posição 
    this.removeAt = function(position) {

        //verifica valores fora do intervalo
        if (position > -1 && position < length) { //1
            
            let current = head, //2
            previous, //3
            index = 0; //4

            //remove o primeiro elemento
            if (position === 0) { //5
                head = current.next;
            } else {

                while (index++ < position){ //6

                    previous = current; //7
                    current = current.next; //8
                }

                //faz a ligação do previous como o next de current: pula esse elemento 
                //para removê-lo
                previous.next = current.next; //9

            }

            length--; //10
            return current.element;

        } else {
            return null; // 11
        }
    };

    //inserindo um elemento em qualquer posição
    this.insert = function(position, element){

        //verifica valores fora do intervalo
        if (position >= 0 && position <= length) { //1
            let node = new Node(element),
            current = head,
            previous,
            index = 0;

            if (position === 0) { //adiciona na primeira posição
                node.next = current; //2
                head = node;
            } else {
                while (index ++ < position) { //3
                    previous = current;
                    current = current.next;
                }

                node.next = current; //4
                previous.next = node;//5
            }

            length++; //atualiza o tamanho da lista
            return true;
        } else {
            return false;//6
        }
    };

    //converte objetos linkedList em uma string 
    this.toString = function() {
        let current = head ;//1
        string = '';//2
        
        while (current) {
            string += current.element + (current.next ? 'n' : '');//4
            current = current.next;//5
        }

        return string;//6
    };

    this.indexOf = function(element) {
        let current = head;//1
        index = -1;

        while (current) { //2
            if (element === current.element) {
                return index; //3
            }

            index++;//4
            current = current.next;//5
        }

        return -1;
    };

    this.remove = function(element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    //retornando vazio
    this.isEmpty = function() {
        return length === 0;
    };

    //retornando tamanho da lista
    this.size = function() {
        return length;
    };

    this.getHead = function(){
        return head;
    };

}


