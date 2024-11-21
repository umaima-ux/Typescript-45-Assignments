
//Write a series of conditional tests.

import { toASCII } from "punycode";

//Creating car Variable
let car :string = `Sabaru` ;

//Test No 1
console.log("Is car == `Sabaru`? I predict True");
console.log(car == `Sabaru`)



//   =   hum kisi value ko set kr rhy hain
// ==   hum kise value ko check kr rhy hain
//  ===  hum kisi value ko uski datatype ke sath check kr rhy hai
// != Not equal hai     // 2 != 2 false


//Test No 2
console.log("Is car === `Sabaru`? I predict True");
console.log(car === `Sabaru`)




//Test No 3
console.log("Is car != `Honda`? I predict True");
console.log(car != `Honda`);

//Test No 4
console.log("Is car !== `ford`? I predict True");
console.log(car !== `ford`);

//Test No 5
console.log("Is car.Upper case == `SUBARU`? I predict True.");
console.log(car.toUpperCase() == `SUBARU`);

//Test No 6
console.log("Is car == `SUBARU`? I predict True.");
console.log(car  == `SUBARU`);


//Test No 7
console.log("Is car === `SUBARU`? I predict True.");
console.log(car  === `SUBARU`);

//Test No 8
console.log("Is car === `Train`? I predict True.");
console.log(car  === `Train`);


//Test No 9
console.log("Is car === `Bus`? I predict True.");
console.log(car  === `Bus`);

//Test No 10
console.log("Is car === `Cycle`? I predict True.");
console.log(car  === `Cycle`);




