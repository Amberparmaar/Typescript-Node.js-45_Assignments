// . Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

function make_shirt(size: string, message: string){
    console.log(`Making a ${size} with a message of ${message}`);
}
make_shirt('Large shirt', '"I love TypeScript"');
make_shirt('Medium shirt', '"I love TypeScript"');
make_shirt('Small shirt', '"Life is Beautiful"');