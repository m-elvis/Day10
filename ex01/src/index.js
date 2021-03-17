var myPet = {
    species: "Dog",
    name: "Cuko",
    legs: 4,
    friends: ["Prvi", "Drugi"]
}
function myFunction(myObj) {
    return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };
