function deepCopy(a) {
  if (typeof a=='object') {  
  if (Array.isArray(a)) {
      var r = new Array(a.length);
      for (var i = 0; i < a.length; i++) {
        r[i] = deepCopy(a[i]);
      }
      return r;
    } else {
      var n = {};
      n.prototype = a.prototype;
      for (var k in a) {
        n[k] = deepCopy(a[k]);
      }
      return n;
    }
  }
  return a;
}
