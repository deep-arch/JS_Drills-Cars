const myModule = require('../Inventory/inventory');
let val= myModule.inventory
module.exports = {
problem1: function (){
for (var i= 0; i< val.length; i++)
{
    if (val[i].id == 33)
{
    return "Car " + val[i].id + " is a " + val[i].car_year+" "+ val[i].car_make+ " "+val[i].car_model;
} 
}
}
}