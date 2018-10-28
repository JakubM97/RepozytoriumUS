function getTotalNumberOfNewYaersEveSundays(a, b) {
  var licznik=0;
  for (let i=a-1; i<=b-1; i++) {
    var dzien=1+26+8+i+(Math.floor(i/4))-(Math.floor(i/100))+(Math.floor(i/400))+2;
    if (dzien % 7 == 1) licznik++;
  }
  return licznik;
}