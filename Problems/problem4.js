// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

let years=[];
module.exports = {
problem4(val)
{ 
  for(let i = 0; i < val.length; i++)
  {
    years.push(val[i].car_year);
  }
  return (years);
}
}
