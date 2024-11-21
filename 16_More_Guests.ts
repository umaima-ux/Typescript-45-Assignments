let Guest_list :string[] = [`Ella`,`John`,`Elif`,`Mickel`];

// for(let i=0; i<Guest_list.length; i++){

// console.log(`Dear `   + Guest_list[i] + `,\n\nPlease Join us for dinner and an unforgettable gathering.\n\nokay,take care, see you tommorow dinner!\n\n`)

// }


let absent_Guest :string = `Ella` ;

let new_Guest :string = `Eleson` ;

Guest_list[0] = new_Guest ;

for(let i=0; i<Guest_list.length; i++){
console.log(`Dear `   + Guest_list[i] + `,\n\nPlease Join us for dinner and an unforgettable gathering.\n\nokay,take care, see you tommorow dinner!\n\n`)
}

console.log(`Dear. ${absent_Guest} is not coming to the party. ` );

console.log(`Good News! We find big table so we are inviting 3 more guests.`);

Guest_list.unshift(`Eaena`);
Guest_list.splice(2,0,`Juley`);
Guest_list.push(`Mickey`);

for(let i=0; i<Guest_list.length; i++){

console.log(`Dear ` + Guest_list[i] + `,\n\nPlease Join us for dinner and an unforgettable gathering. \n\nokay,take care, see you tommorow dinner!\n\n`)

}



