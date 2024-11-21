"use strict";
//Great_Magicians : Start with a copy of your program from execrise 39. 
//Write a function called make_great() that modifies the array of magicians by adding the pharse the Great to each magicians name.
//Call show_Magicians to see the list has actually been modified.
let magician = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Almus Dumbledore'];
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'The great' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magician.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
