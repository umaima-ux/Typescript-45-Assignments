//lowercase
var personName = "Umama";
console.log("lowercase:", personName.toLowerCase());
//Uppercase
console.log("uppercase:", personName.toUpperCase());
//tiltlecase
console.log("titlecase;", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
