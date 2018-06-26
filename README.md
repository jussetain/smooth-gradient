
smooth-gradient.js
========================

Calculate some gradient and a specific color for a input value

Using Gradient.js Server-side
---------------------------
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
var grad = new Spectrum("#ff0000", "#00ff00", "#0000ff");
```

You can now retreive the color corresponding to your input in the gradiant spectrum.
Only values between 0 and 100 are effective. Negatives will be considered as 0 and values above 100 as 100.

```javascript
// Colors can be given as an unlimited number of parameters
var color = grad.getColor(45);
```

This package is perfect for color gradient progress bar for example.