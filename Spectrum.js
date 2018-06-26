var Color = require("./Color");
var Point = require("./Point");

class Spectrum {
  constructor(){
    this.colors = [];
    this.differentialFunctions = [] ;
  }

  setColors(...colors){
    for(var c in colors){
      var tmp_color = this._hexToRgb(colors[c]);
      this.colors.push(new Color(tmp_color.r, tmp_color.g, tmp_color.b));
    }
    this.setDifferentialFunctions();
  }

  setDifferentialFunctions(){
    for(var i = 0; i <= this.colors.length - 2; i++){
      var point_r = new Point((100/(this.colors.length-2)*i)/(this.colors.length-1), this.colors[i].r);
      var point_g = new Point((100/(this.colors.length-2)*i)/(this.colors.length-1), this.colors[i].g);
      var point_b = new Point((100/(this.colors.length-2)*i)/(this.colors.length-1), this.colors[i].b);
      var point_r_bis = new Point((100/(this.colors.length-2)*(i+1))/(this.colors.length-1), this.colors[i + 1].r);
      var point_g_bis = new Point((100/(this.colors.length-2)*(i+1))/(this.colors.length-1), this.colors[i + 1].g);
      var point_b_bis = new Point((100/(this.colors.length-2)*(i+1))/(this.colors.length-1), this.colors[i + 1].b);
      var m_r = (point_r_bis.y - point_r.y) / (point_r_bis.x - point_r.x) ;
      var m_g = (point_g_bis.y - point_g.y) / (point_g_bis.x - point_g.x) ;
      var m_b = (point_b_bis.y - point_b.y) / (point_b_bis.x - point_b.x) ;
      var b_r = point_r_bis.y - m_r * point_r_bis.x ;
      var b_g = point_g_bis.y - m_g * point_g_bis.x ;
      var b_b = point_b_bis.y - m_b * point_b_bis.x ;
      this.differentialFunctions.push({
        d_r: (x) => {
          return m_r * x + b_r ;
        },
        d_g: (x) => {
          return m_g * x + b_g ;
        },
        d_b: (x) => {
          return m_b * x + b_b ;
        },
      });
    }
  }

  convert(input){
    if(input < 0) input = 0 ;
    if(input > 100) input = 100 ;

    var step = Math.floor(input / (100/this.colors.length - 1)) >= this.colors.length - 1
      ? Math.floor(this.colors.length - 2)
      : Math.floor(input / (100/this.colors.length - 1));

    var new_r = this.differentialFunctions[step].d_r(input);
    var new_g = this.differentialFunctions[step].d_g(input);
    var new_b = this.differentialFunctions[step].d_b(input);
    return new Color(Math.round(new_r), Math.round(new_g), Math.round(new_b));
  }

  _hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

}

module.exports = Spectrum;