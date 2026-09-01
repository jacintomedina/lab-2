console.log("************** READ BOOKS *********************");
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
function isBookRead(books, titleToSearch) {
    return books.find(book => book.title === titleToSearch)?.isRead ?? false;
}
console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Harry Potter y la piedra filosofal"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));
export {};
