//More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.
var guestList = ['Shoukat', 'Fahad', 'Faizan', 'Zoya', 'Asfand'];
var absentGuest = "Fahad";
var newGuest = "Zayaan";
guestList[1] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear Mr. " + guestList[i] + "\n\n You are cordially invited to my party.\n\nThank you!\n\n");
}
console.log("Mr. ".concat(absentGuest, " is not coming to the party."));
//Inform that a bigger dinner table is available
console.log("Hey! friends its big news we found a bigger dinner table now so we invite 3 more guest");
//use .unshift =>Add one new guest to the beginning of the array
guestList.unshift("Amber");
// use .splice=> Add one new guest to the middle of the array
guestList.splice(2, 0, "Bilal");
//Use push() => to add one new guest to the end of the array
guestList.push("Wardah");
// Print a new set of invitation messages, one for each person in your list.
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear Mr. " + guestList[i] + "\n\n You are cordially invited to my party.\n\nThank you!\n\n");
}
