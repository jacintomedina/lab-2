console.log("************** CONCAT *********************");

const fruits: string[] = ["apple", "banana", "orange", "peach", "watermelon"];
const vegetables: string[] = [
	"carrot",
	"broccoli",
	"spinach",
	"tomato",
	"cucumber",
];
const dairyProducts: string[] = ["milk", "cheese", "yogurt", "butter", "cream"];

const concat = (a: string[], b: string[]): string[] => [...a, ...b];

const concat_opt = (...arrays: string[][]): string[] => arrays.flat();

console.log(concat(fruits, vegetables));
console.log(concat_opt(fruits, vegetables, dairyProducts));