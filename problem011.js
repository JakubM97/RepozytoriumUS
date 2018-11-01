function deepFind(a,b) {
  var suma=0;
  for (var i=0; i<=a.length; i++) {
    if(typeof a[i]=='object') {
       suma+=deepFind(a[i],b);
       } else {
         if (a[i]==b) suma++;
       }
  }
  return suma;
}
