var Guest_list = ["Ella", "John", "Elif", "Mickel"];
// for(let i=0; i<Guest_list.length; i++){
// console.log(`Dear `   + Guest_list[i] + `,\n\nPlease Join us for dinner and an unforgettable gathering.\n\nokay,take care, see you tommorow dinner!\n\n`)
// }
var absent_Guest = "Ella";
var new_Guest = "Eleson";
Guest_list[0] = new_Guest;
//for(let i=0; i<Guest_list.length; i++){
//console.log(`Dear `   + Guest_list[i] + `,\n\nPlease Join us for dinner and an unforgettable gathering.\n\nokay,take care, see you tommorow dinner!\n\n`)
//}
console.log("Dear. ".concat(absent_Guest, " is not coming to the party. "));
console.log("Good News! We find big table so we are inviting 3 more guests.");
Guest_list.unshift("Eaena");
Guest_list.splice(2, 0, "Juley");
Guest_list.push("Mickey");
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear " + Guest_list[i] + ",\n\nPlease Join us for dinner and an unforgettable gathering. \n\nokay,take care, see you tommorow dinner!\n\n");
}
console.log("Sorry we can not arrange big table, Only two peoples will be invited.");
while (Guest_list.length > 2) {
    var remove_Guest = Guest_list.pop();
    console.log("Sorry Dear. ".concat(remove_Guest, ", You are not invited for dinner. "));
}
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear " + Guest_list[i] + ",\n\nYou are still invited.\n\nokay,take care, see you tommorow dinner!\n\n");
}
Guest_list.splice(0, 2);
console.log(Guest_list);