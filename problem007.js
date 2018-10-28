function findMax() {
  if (arguments.length==0) return null;
  var l=arguments[0];
  for (let i=0; i<=arguments.length-1; i++) {
    if (arguments[i]>l) l=arguments[i];
  }
  return l;
}