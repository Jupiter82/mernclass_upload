//a.Prototype

function User(_name,_email,_address){
    this.name = _name
    this.email = _email
    this.address = _address
}

User.prototype.getName = function(){
    return this.name
}
const userObj = new User("jupiter","jupiter@gmail.com","thimi")
console.log(userObj)

// Create a class electricity bill using prototype
// assing name, and unit consumption as the prototype property
// create a function to calculate the total amount based on the consumption
// assing the calculated value to a class varirable totalAmt
// the logic should be:
// for first 20 units sum amount => NPR. 80
// for the next 10 units => Npr . 5/unit
// for the next 20 units => Npr . 7/unit
// for the next 30 units => Npr . 10/units
// for the next 50 units => Npr. 15/units
//above that => Npr . 20/units
//create another function to the prttype to print the following.
// name : .............
//units consumed : ....................
// your bill amount : .......................


function Electricity(_name,_units){

}