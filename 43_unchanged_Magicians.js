"use strict";
//Unchanged_Magicians: Start with your work from execrise 40.Call the function make_great() with a  copy  of the array 
//magicians name Because the original array will be unchanged return the new array and store it in a seprate array.
//Call show_magicians with each array to show that you have the one array of the original names and one array with the great added
//to each magician's name.
let magician = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Almus Dumbledore'];
function copyArray(array) {
    return [...array];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        //magician[i] = 'The great ' + magicianArray[i]
        magicianArray[i] = 'The great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magician.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log('\n\nThis is my originalarray:');
show_magicians(magician);
console.log('\n\nThis is my modified copy of the array:');
show_magicians(copyMagicianArray);
