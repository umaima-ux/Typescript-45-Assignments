"use strict";
//SANDWHICHES: Write a function that accepts array of items a person wants on a sandwhiches.The function should have one 
//parameter that collects as many items as a function call provide, and it should print a summary of the sandwhichthat is being ordered.
//Call the function three times,using different number of argument of each time.
function make_sandwhich(items) {
    console.log('\nPreparing your sandwhich:');
    items.forEach(element => console.log("_ " + element));
    console.log('Have a great bite!\n');
}
make_sandwhich(['Tuscan Delight', 'Spicy Avocado Smash', 'Mediterranean Melt']);
make_sandwhich(['Smoky Chipotle Chicken', 'Rustic Italian Hero', 'Garden Fresh Veggie']);
make_sandwhich(['Classic BLT Twist', 'Southern BBQ Crunch', 'Honey Mustard Turkey']);
