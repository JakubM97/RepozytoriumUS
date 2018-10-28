function stringRotate(a, b) {
  if (isNaN(b) || b<0) {return '';}
  return a.substr(b)+a.slice(0,b);
}