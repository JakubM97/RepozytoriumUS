



















function triangleArea(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) return -1;
  if (a>b+c || b>a+c || c>a+b) {
    return -1;
  }
  if (a<=0 || b<=0 || c<=0) {
    return -1;
  }
  var pobw = (a+b+c)/2;
  var wynik = Math.sqrt(pobw*(pobw-a)*(pobw-b)*(pobw-c));
  wynik = Math.round(wynik*100);
  if (wynik<=0) {
    return -1;
  } else {
    return wynik/100;
  }
}
