//More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.

let guestList : string[] = ['Shoukat', 'Fahad', 'Faizan', 'Zoya', 'Asfand'];


let  absentGuest : string = "Fahad";
let newGuest : string = "Zayaan";


guestList[1] = newGuest ;
for (let i=0; i<guestList.length; i++){
    console.log(`Dear Mr. ` + guestList[i] + `\n\n You are cordially invited to my party.\n\nThank you!\n\n`);
} 
console.log(`Mr. ${absentGuest} is not coming to the party.`);



//Inform that a bigger dinner table is available
console.log(`Hey! friends its big news we found a bigger dinner table now so we invite 3 more guest`);

//use .unshift =>Add one new guest to the beginning of the array
guestList.unshift(`Amber`);

// use .splice=> Add one new guest to the middle of the array
guestList.splice(2 , 0 , `Bilal`);

//Use push() => to add one new guest to the end of the array
guestList.push(`Wardah`);

// Print a new set of invitation messages, one for each person in your list.

for (let i=0; i<guestList.length; i++){
    console.log(`Dear Mr. ` + guestList[i] + `\n\n You are cordially invited to my party.\n\nThank you!\n\n`);
} 





