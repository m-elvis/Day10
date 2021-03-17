var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};
function myFunction(prvi, drugi) {
    lion[prvi] = drugi;
    return lion;
}
myFunction("roar", "roar-roar");
module.exports = myFunction;