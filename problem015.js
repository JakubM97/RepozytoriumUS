var Stack = [];
Stack.MojLength = 0;

Stack.push = function(a,b=1) {
  for(var i=Stack.MojLength; i<Stack.MojLength+b-1;i++) {
    Stack[i]=null;
  }
  Stack.MojLength=Stack.MojLength+b;
  Stack[Stack.MojLength-1]=a;
}

Stack.pop = function(a=1) {
  Stack.MojLength-=a;
  var b=Stack[Stack.MojLength];
  Stack.splice(Stack.MojLength,a);
  return b;
}
