//CARS: Write a function that stores information about car in a object. The function
//should always recieve a manufacturer and a model name.It should accept an arbitrary
//of keyword arguments. Call the function with the required information and two other name_value pair
//such as a color or an optional feature. Print the object that returned to make sure all
//the information was stored correctly.

import features from "process";

function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: { [key : string] :any } [] ) : object {

const carInfo = {
manufacturer,
modelName,
...Object.assign( {}, ...extraOption)
}

return carInfo;

}

let answer = storeCarInfo('Honda','Civic', {color:'black'}, {features:['navigation','ppwer window']});
console.log(answer)