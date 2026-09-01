console.log("************** ARRAY OPERATIONS *********************");

const fruits: string[] = ["apple", "banana", "orange", "peach", "watermelon"];

//HEAD
const head = (collection: string[]): string => {
	const [first] = collection;
	return first;
};

console.log("HEAD =",head(fruits));

//TAIL
const tail = ([, ...rest]: string[]): string[] => {
	return rest;
};

console.log("TAIL =", tail(fruits));

//INIT
const init = (collection: string[]): string[] => collection.slice(0, -1);

console.log("INIT =",init(fruits));

//LAST
const last = (collection: string[]): string =>
	collection[collection.length - 1];

console.log("LAST =",last(fruits));
