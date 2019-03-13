function Stack(){
    let items = []; 

   this.push = function(element) {
     items.push(element);
   };

   this.pop = function() {
        return items.pop();
   };

   this.peek = function() {
       return items[items.length - 1];
   };

    this.isEmpty = function() {
       return items.length == 0;
   };

   this.size = function() {
       return items.length;
   };

   this.clear = function() {
       items = [];
   };

   this.print = function() {
      console.log(items.toString());
   };
}

function divideBy2(number){
  var remStack = new Stack(),
  rem,
  binarioString = '';

  while (number > 0) {
     rem = Math.floor(number % 2);
     remStack.push(rem);
     number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
     binarioString += remStack.pop().toString();
  } 

  return binarioString;
}

console.log(divideBy2(5));
