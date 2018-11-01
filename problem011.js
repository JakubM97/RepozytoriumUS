function deepFindAndCount(a,b) {
  const stack = [...a];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  var sum=0;
  for (var i=0; i<res.length; i++){
    if (res[i]==b) {
      sum++;
    }
  }
  return sum;

}
