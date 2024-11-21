"use strict";
//Add an if test to exercise 30 to make the list of users is not empty .
//if the list is empty, print the message we need to find some users.
//Remove all of the usernames from your array, & make sure the correct message is printed .
let userNames = [`John`, `Ella`, `Lazee`, `Daiina`];
if (userNames.length === 0) {
    console.log(`We Need To Find Some Users !!!`);
}
else {
    userNames = [];
    console.log(`All user names has been removed.` + userNames.length);
}
