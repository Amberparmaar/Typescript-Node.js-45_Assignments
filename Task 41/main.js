"use strict";
// . Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
let magicians = ["Dynamo", "David Blaine", "Cris Angel"];
show_magicians(magicians);
