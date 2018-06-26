var Spectrum = require("./Spectrum");
var spectrum = new Spectrum("FF0000", "00FF00", {r: 0, g:0, b:255}, "#000000");
spectrum.properties();
var newColor = spectrum.getColor(50);
console.log(newColor);