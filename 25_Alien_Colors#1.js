"use strict";
//create a variable called alien color
let alien_Color = `green`;
//Write an if statement to test whether the alien's colors is green. if it is, print a message that the player just earned 5 points.
if (alien_Color === `green`) {
    console.log("Player Just earned 5 points !");
}
//write one version of this program that passes the if test and another that fails.
alien_Color = `yeliow`;
//The version that fails will hve no output.
if (alien_Color === `green`) {
    console.log("Player Just earned 5 points !");
}
