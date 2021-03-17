function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Dino",
            title: "Pjesma",
            release_year: 1991,
            id: 977,
            formats: {
                1: "CK",
                2: "E7",
                3: "AF"
            },
            
        },
    }
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;