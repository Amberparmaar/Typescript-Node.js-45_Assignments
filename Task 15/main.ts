// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

let guestList : string[] = ['Shoukat', 'Fahad', 'Faizan'];

for (let i=0; i<guestList.length; i++){
    console.log(`Dear Mr. ` + guestList[i] +  `\n\n You are cordially invited to my party.\n\nThank you!\n\n`);
}
//Modify your list, replacing the name of the guest who can’t make it with
//the name of the new person you are inviting.


let  absentGuest : string = "Fahad";
let newGuest : string = "Zayaan";

//Print a second set of invitation messages, one for each person who is still
//in your list.


guestList[1] = newGuest ;
for (let i=0; i<guestList.length; i++){
    console.log(`Dear Mr. ` + guestList[i] + `\n\n You are cordially invited to my party.\n\nThank you!\n\n`);
}
console.log(`Mr. ${absentGuest} is not coming to the party.`);








