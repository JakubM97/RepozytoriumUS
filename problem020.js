function Square(bok) {
  this.bok = bok;
  this.getArea = function() {
    return this.bok*this.bok;
  }
  this.getPerimeter = function() {
    return this.bok*4;
  }
}
