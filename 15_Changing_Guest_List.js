var Guest_list = ["Ella", "John", "Elif", "Mickel"];
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear " + Guest_list[i] + ",\n\nPlease Join us for dinner and an unforgettable gathering.\n\nokay,take care, see you tommorow dinner!\n\n");
}
var absent_Guest = "Ella";
var new_Guest = "Eleson";
Guest_list[0] = new_Guest;
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear " + Guest_list[i] + ",\n\nPlease Join us for dinner and an unforgettable gathering.\n\nokay,take care, see you tommorow dinner!\n\n");
}
console.log("Dear. ".concat(absent_Guest, " is not coming to the party. "));
