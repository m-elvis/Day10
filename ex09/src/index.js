function myFunction(myObj, checkProp) {
    var name = { 
      title: "Titanic",
      song: "My Heart Will Go On",
      genre: "drama",
    };
    name.hasOwnProperty("title");
    name.hasOwnProperty("song");
    name.hasOwnProperty("genre");
    name.hasOwnProperty("actor");
    return myObj[checkProp];
  }
  console.log(
    myFunction(
      { title: "Titanic", song: "My Heart Will Go On", genre: "drama" },
      "title"
    )
  );
  console.log(
    myFunction(
      { title: "Titanic", song: "My Heart Will Go On", genre: "drama" },
      "song"
    )
  );
  console.log(
    myFunction(
      { title: "Titanic", song: "My Heart Will Go On", genre: "drama" },
      "genre"
    )
  );
  console.log(
    myFunction(
      { title: "Titanic", song: "My Heart Will Go On", genre: "drama", actor: "Not Found"},
      "actor"
      )
    );
    module.exports = myFunction;
