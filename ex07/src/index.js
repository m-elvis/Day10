function myFunction(olahkoca) {
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
    roar: "roar-roar"
};
    delete lion[olahkoca];
    return lion;
}

myFunction("roar");
module.exports = myFunction;