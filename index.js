var Spectrum = require("./Spectrum");
var spectrum = new Spectrum("FF0000", "00FF00", "0000FF", "000000");
spectrum.properties();
var newColor = spectrum.getColor(-50);
console.log(newColor);