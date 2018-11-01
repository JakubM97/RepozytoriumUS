function objectsDiff(a, b) {
  var tabA = [];
  var tabB = [];
  var j=0;
  for(var i in a){
    tabA[j]=i;
    j++;
  }
  
  j=0;
  
  for(var l in b){
    tabB[j]=l;
    j++
  }
  
  for(var q=0; q<tabA.length; q++) {
    for(var w=0; w<tabB.length; w++){
      if(tabA[q]==tabB[w]) {
        tabA.splice(q,1);
        tabB.splice(w,1);
        q--;
        break;
      }
    }
  }
  return tabA.concat(tabB);
}

console.log(objectsDiff({x: 1, y: 1, z: 1}, {w: 2, x: 2, z: 2}));
