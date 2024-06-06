"use strict";
// . Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
let magicians = ["Dynamo", "David Blaine", "Cris Angel"];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " " + `The Great`;
    }
    console.log(magicians);
}
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
const copymagicianArray = copyArray(magicians);
make_great(magicians);
show_magicians(magicians);
