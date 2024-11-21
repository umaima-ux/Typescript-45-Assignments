  //Oridinal numbers indicate their poisition in a array, such as 1st and 2nd .Most oridinal numbers end in the except 1,2 and 3.
  //Srore the numberds 1 through 9 in a array.
  //Loop through the array.
  //Use an if else chain inside the loop to print the proper oridinal ending for each number.
  // output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th ",and each result should be on a seprate line. 


let numbers:number[] = [1,2,3,4,5,6,7,8,9];

for(let num of numbers){

   let oridinalEnding :string;

   if(num === 1){
    oridinalEnding ="st";
   }
   
   else if(num === 2){
    oridinalEnding ="nd";
   }
else if (num === 3){
oridinalEnding ="rd";
}
else{
    oridinalEnding ="th";

}
console.log(`${num}${oridinalEnding}`);
}