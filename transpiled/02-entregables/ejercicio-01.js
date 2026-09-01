console.log("************** ARRAY OPERATIONS *********************");
const fruits = ["apple", "banana", "orange", "peach", "watermelon"];
//HEAD
const head = (collection) => {
    const [first] = collection;
    return first;
};
console.log("HEAD =", head(fruits));
//TAIL
const tail = ([, ...rest]) => {
    return rest;
};
console.log("TAIL =", tail(fruits));
//INIT
const init = (collection) => collection.slice(0, -1);
console.log("INIT =", init(fruits));
//LAST
const last = (collection) => collection[collection.length - 1];
console.log("LAST =", last(fruits));
export {};
