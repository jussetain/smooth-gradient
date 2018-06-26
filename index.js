var Spectrum = require("./Spectrum");



var spectrum = new Spectrum();



spectrum.setColors("00FF00", "FF0000", "F0A3F4");
var newColor = spectrum.convert(10000);
console.log(newColor);