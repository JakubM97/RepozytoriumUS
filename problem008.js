function magicSequence(a) {
  if (isNaN(a) || !Number.isInteger(a) || a<=0) return null; 
  if (a==1) return -1;
  if (a==2 || a==3) return -2;
  return magicSequence(a-1)*(a-3);
}