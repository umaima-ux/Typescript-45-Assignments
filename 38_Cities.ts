//Cities: Write a function called describe citiesthat accepts the name of city and its countrry.
//The function should print a simple sentence 
//such as, Karachi is in Pakistan. Give the parameter for the country a default value.
// Call function for three different cities,at least one of which is not in he default country.




function cities(city:string,country:string='Default Country'){
    console.log(` ${city} is in ${country}`)
}
cities('Karachi','Pakistan')
cities('Sharjah', 'Abu Dabii')
cities('Istanbul')