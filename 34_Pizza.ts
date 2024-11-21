//Pizzas: Think three kinds of your favourite  Pizzas.
//Store these name of Pizza in an array and then use for loop to print the name of each Pizza.
//**modify your for loop to print a sentence usiing the name of Pizza for each Pizza you should have one 
//line of output contaiing a simple statement like , i like B.B.Q Pizza
//** Add a line at the end of the program outside the for loop that states how much oyu like Pizza.THe output should consist of
//threee ormore line about the kind pizza you like& then additional sentence Such as , I really love Pizza!! 



let Pizzas:string[] = ['Peporoni', 'B.B.Q', 'Chicken Tikka']
for(let Pizza of Pizzas){
console.log(`I Like ${Pizza} Pizza. `)
}

console.log("I Really Like Pizza!!")