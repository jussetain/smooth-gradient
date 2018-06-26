var Spectrum = require("./Spectrum");
var spectrum = new Spectrum([], [], "FF0000", "FF0000");
spectrum.properties();
var newColor = spectrum.getColor(50);
console.log(newColor);