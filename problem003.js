function isLeapYear(a) {
  if ( ( Number.isInteger(a/4) && !Number.isInteger(a/100) ) || Number.isInteger(a/400) ) return true;
  else return false;
}