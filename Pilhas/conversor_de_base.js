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

function baseConverter(number, base){
  var remStack = new Stack(),
  rem,
  baseString = '',
  digits = '0123456789ABCDEF';

  while (number > 0) {
     rem = Math.floor(number % base);
     remStack.push(rem);
     number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
     baseString += digits[remStack.pop()];
  } 

  return baseString;
}

console.log(baseConverter(5, 2));
