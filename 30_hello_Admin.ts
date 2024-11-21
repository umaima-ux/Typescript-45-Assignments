//Make an array of five or more usernames, including the name `admin`. Imagine you are writing code that will print a greeting 
//to each user after they loh into website loop through the array , and print a greeting to eaach user :
//If the username is `admin`, print a special greeting such as Hello admin, would you like to see a status report.
//Otherwise, print a generic such as `HelloEric`, Thank you for logging again.

const userNames:string[] = [`Admin`,`Ella`,`John`,`Eleson`,`Laze`];

for(let i=0; i<userNames.length; i++){
    if (userNames[i] === `Admin`){
        console.log("Hello Admin, Would You Like To See You a Status Report!")
    }
    else{
        console.log(`Hello: ${userNames[i]}, Thank you for logging again.`)
    }
}
