var Stack = [];
var StackLength=0;
Stack.push = function(a,b=1) {
  for(var i=StackLength; i<StackLength+b-1;i++) {
    Stack[i]=null;
  }
  StackLength=StackLength+b;
  Stack[StackLength-1]=a;
}

Stack.pop = function(a) {
  StackLength=StackLength-a;
  var b=Stack[StackLength];
  for (var i=StackLength; i<Stack.length; i++) {
    Stack[i]=null;
  }
  
  return b;
}
