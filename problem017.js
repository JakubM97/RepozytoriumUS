function compose(){
  var tab1 = Array.prototype.slice.call(arguments);
  var tab = [];
  for (var i=0; i<arguments.length; i++) {
    tab[i]=tab1[i];
  }
  return function(x) {
    var i = tab.length-1;
    while(i >= 0) {
      x = tab[i](x);

      i--;
    }
    for (var i=0; i<tab1.lenght; i++) {
      arguments[i]=tab1[i];
    }
    return x;
  }
}
