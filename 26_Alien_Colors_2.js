"use strict";
//Alien colors #2: Choose for an alien as you did in Exercise 25. 
let alien_Color = `green`;
// write an if-else chain()
//If the alien'scolors is green.
//Print a statement that the player just earned 5 points for shooting the alien.
if (alien_Color === "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points.");
}
//If the alien color isn't green,print a statement that the player just earned 10 points.
alien_Color = "Yellow";
if (alien_Color === "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points.");
}
