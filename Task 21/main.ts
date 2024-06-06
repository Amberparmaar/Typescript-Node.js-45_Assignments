//. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

type  Items = {
    name : string;
    category : string;
    price : number;
}
const item1 : item = {
    name : "Laptop",
    category : "Electronic",
    price : 25000,
}
const item2 : item  = {
    name : "Book",
    category : "English litrature",
    price : 500,

}
console.log("Item 1", item1);
console.log("Item 2", item2);