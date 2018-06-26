var Spectrum = require("./Spectrum");
var spectrum = new Spectrum();
spectrum.setColors("FF0000", "00FF00", "0000FF", "000000");
spectrum.properties();
var newColor = spectrum.convert(-50);
console.log(newColor);