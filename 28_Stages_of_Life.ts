//Write an if_else chain that determines a person stage of life. Set a value for the variable age, and then 
//if the person is less than 2 years old , print a message that the "Person is baby"
let age:number =25;
if (age<2){
    console.log("Person is Baby")
}
//if the person is at least 2 years old but less than 4 . Print a message that "the person is Toddler"
else if (age>=2 && age<4){
    console.log("Person is Toddler")
}
//if the person is at least 4 years old but less than 13 print a message that "the person  is Kid"
else if (age>=4 && age<13){
    console.log("Person is Kid")
}
//if the person is 13 years old but less than 20,print a message that "Person is Teenager" 
else if(age>=13 && age<20){
    console.log("Person is Teenager")
}
//if the is 20 but less than 65 print a message that "Person is an Adult"
else if(age>=20 && age<65){
    console.log("Person is Adult")
}
//if the person is age 65 print a message "Person is an Elder"
else if(age>=20 && age<65){
    console.log("Person is Elder")
}


