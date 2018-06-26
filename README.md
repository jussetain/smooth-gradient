
smooth-gradient.js
========================

Calculate some gradient and a specific color for a input value

Using smooth-gradient server side
---------------------------------
Install the smooth-gradient module

```
npm install smooth-gradient
```

Add it to your source.

```
var Spectrum = require('smooth-gradient');
```

Usage
--------------------

A single class is exposed, Spectrum, which takes a list of colors stops and steps.

```javascript
// Colors can be given as an unlimited number of parameters
var grad = new Spectrum("FF0000", "00FF00", {r: 0, g:0, b:255}, "#000000");
```

You can now retreive the color corresponding to your input in the gradiant spectrum.
Only values between 0 and 100 are effective. Negatives will be considered as 0 and values above 100 as 100.

```javascript
var color = grad.getColor(45);
console.log(color); // output => Color { r: 0, g: 128, b: 128 }
```

This package is perfect for color gradient progress bar for example.