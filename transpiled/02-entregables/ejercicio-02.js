console.log("************** CONCAT *********************");
const fruits = ["apple", "banana", "orange", "peach", "watermelon"];
const vegetables = [
    "carrot",
    "broccoli",
    "spinach",
    "tomato",
    "cucumber",
];
const dairyProducts = ["milk", "cheese", "yogurt", "butter", "cream"];
const concat = (a, b) => [...a, ...b];
const concat_opt = (...arrays) => arrays.flat();
console.log(concat(fruits, vegetables));
console.log(concat_opt(fruits, vegetables, dairyProducts));
export {};
