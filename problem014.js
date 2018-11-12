const Vectors = {
  sum : function(a,b) {
    if(typeof a=='object' || typeof a=='number' && typeof b=='object' || typeof b=='number') {
    for(var i=0; i<b.length; i++) {
      if(typeof a[i]!='number') a[i]=0;
      a[i]+=b[i];
    }
    return a; }
    else { return false; }
  
  },
  
  mulByScalar : function(a,b) {
    if ((typeof a=='object' || typeof a=='number') && typeof b=='number') {
      if(typeof a=='number') return a*b
      else {
        for(var i=0; i<a.length; i++){
          a[i]=a[i]*b;
        }}
      return a;
    } else { return false; }
    
  }
}
