//Magiciams : make a array of magician's name.
//Pass the array to the function called show_magicians(), which print the name of each magicians in the array.

let magicians:string[] = ['Gandalf','Merlin','Harry Potter','Doctor Strange'];

function show_magicians(magicians : string[]){

    magicians.forEach(element => {
    
console.log(element)

});

}

show_magicians(magicians)