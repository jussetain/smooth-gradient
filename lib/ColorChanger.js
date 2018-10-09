var Color = require("../beans/Color");
var DifferentialFunction = require("../beans/DifferentialFunction");

class ColorChanger {
  static saturation(color, factor){
    var c ;
    if (typeof color == 'string'){
      var tmp_color = this._hexToRgb(color);
      c = new Color(tmp_color.r, tmp_color.g, tmp_color.b);
    } else if (typeof color == 'object') {
      if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
        c = new Color(color.r, color.g, color.b);
      }
    }

    c.r = this.factorise(c.r, factor) ;
    c.g = this.factorise(c.g, factor) ;
    c.b = this.factorise(c.b, factor) ;
    return c ;
  }

  static light(color, factor){
    var c ;
    if (typeof color == 'string'){
      var tmp_color = this._hexToRgb(color);
      c = new Color(tmp_color.r, tmp_color.g, tmp_color.b);
    } else if (typeof color == 'object') {
      if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
        c = new Color(color.r, color.g, color.b);
      }
    }

    c.r = this.add(c.r, factor) ;
    c.g = this.add(c.g, factor) ;
    c.b = this.add(c.b, factor) ;
    return c ;
  }

  static _hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  static factorise(n, f) {
    var result = Math.round(n * f);
    if(result >= 255) return 255 ;
    if(result <= 0) return 0 ;
    return result
  }

  static add(n, f) {
    var result = Math.round(n + f);
    if(result >= 255) return 255 ;
    if(result <= 0) return 0 ;
    return result
  }
}



module.exports = ColorChanger;