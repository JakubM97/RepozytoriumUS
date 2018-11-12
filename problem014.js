const Vectors = {
  sum : function(a,b) {
    if(a.length==b.length) {
      var wynik = [];
      for(var i=0; i<b.length; i++) {
        wynik[i]=a[i]+b[i];
      }
      return wynik;
    } else return false;
  },
  
  mulByScalar : function(a,b) {
    if (typeof a=='object' && typeof b=='number') {
      var wynik = [];  
      for(var i=0; i<a.length; i++){
          wynik[i]=a[i]*b;
        }
      return wynik;
    } else return false;
    
  }
}
