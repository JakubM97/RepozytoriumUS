function parametricSort(a, b) {
 if(b=='asc') 
   return a.sort(function(z,x){return z-x});
 if(b=='desc') 
   return a.sort(function(z,x){return x-z});
  else 
   return false;
}
var stringArray=["ala","ma","kota"];
var array=[40,"12",5,"199",100,24,"104"];
console.log(parametricSort(array, 'asc'));
console.log(parametricSort(array, 'desc'));
