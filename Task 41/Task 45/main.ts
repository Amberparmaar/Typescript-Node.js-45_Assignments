// Cars: Write function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly. a function that stores information about a car in a Object.


interface Car {
    manufacturer: string;
    model: string;
    [key: string]:any;
}

function CarInfo(manufacturer: string, model: string, ...args: [string, any][]): Car {
    const car: Car = { manufacturer, model };
    args.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}

// Example usage:
const car = CarInfo('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
console.log(car);

