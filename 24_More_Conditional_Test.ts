
//Equality Test
console.log("Equality test with string: ", "Car" === "Car");

//Inequality Test
console.log("Inequality test with string: ", ("Car" as string) != "Train");

//Test using the lowercase function
console.log("lower case function test: ", "HEY".toLowerCase() === "hey");

//Numerical test involving Equality
console.log("Equality test with number: ", 26 === 26);

//Numerical test involving Inequality
console.log("Equality test with number: ", (26 as number) != 45);

//Greater than test
console.log("Greater than test: ", 100>50);

//Less than test
console.log("less than: ", 100<50);

//Greater than or Equal to  test
console.log("Greater than or Equal to test: ", 100 >= 100);

//Less than or Equal to  test
console.log("Less than or Equal to test: ", 100 <= 100);

//Test using "AND" Operator
console.log("AND Operator test: ", 50 ===50 && 100>50);

//Test using "OR" Operator
console.log("OR Operator test: ", 50 ===50 || false);

//Test whether an iteam is an Array
const fruits :string[] =[`Pineapple`, `Cherry` , `Banana` ];

////Test whether an iteam is not an Array
console.log(`Testing "Orange" is not in Array: `, !fruits.includes(`Orangre`));





