// Do the following program that simulates how websites ensure that everyone has a unique usernames.
//Make a list of five usernames called current users.
//Make another list of  five usernames called new_users.
//Make sure one or two of the new usernames are also in the current_users list.
//Loop through the new users list to see if each new usernames has already been used.If it has, print a message that the 
//will need to enter a new username. If a username has not been used, print a saying that the username is available.
//Make sure your comparsion is Case sensitive . If `John` has been user`JOHN` should not be accepted.

let current_user: string[ ] = ['Ella','John','Eleson','Marry','Lazzy']
let new_users: string[ ] = ['Micheal','Lirey', 'ElLa', 'Memmy', 'MaRry']

new_users.forEach(new_Username =>{
let lowerCase: string = new_Username.toLowerCase();
if(current_user.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
console.log(`The username ${new_Username} is not available. Please try another UserName!!`)
}
else{
console.log(`The username ${new_Username} is avaiable.`)

}
})