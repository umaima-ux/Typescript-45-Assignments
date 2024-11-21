//Large-Shirt: Modify the make-Shirt function so that shirts are large by default with the message  that reads I love Typescript.
//Make a large shirt and a medium shirt with default message, and a shirt of any size with  a different message.



function make_shirt(size:string = 'Large', text:string='I love typescript'){
console.log(`Creating a ${size} shirt with the message:${text}`)
}
make_shirt();
make_shirt('Medium');
make_shirt('small', 'I love Phython')