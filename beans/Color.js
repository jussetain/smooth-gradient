class Color {
  constructor(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
  }
  hex(){
    return "#" + (this.r.toString(16) + this.g.toString(16) + this.b.toString(16)).toUpperCase() ;
  }
}

module.exports = Color;