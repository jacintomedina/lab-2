console.log("************** CLONE / MERGE *********************");
const user = {
    name: "Jacinto",
    surname: "Medina",
    age: 37,
};
function clone(source) {
    return { ...source };
}
const userCloned = clone(user);
console.log(userCloned);
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
function merge(source, target) {
    return { ...target, ...source };
}
const aCloned = clone(a);
const bCloned = clone(b);
const mergedObject = merge(aCloned, bCloned);
console.log(mergedObject);
export {};
