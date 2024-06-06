// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName : string = "Amber Parmaar";
// lower case
console.log("lowercase:", personName.toLocaleLowerCase());
// upper case
console.log("uppercase:", personName.toUpperCase());
// title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));