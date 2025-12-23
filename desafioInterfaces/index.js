function printBookInfo(book) {
    console.log("Title: ".concat(book.title));
    console.log("Author: ".concat(book.author));
    console.log("Pages: ".concat(book.pages));
    console.log("ISBN: ".concat(book.isbn));
}
// Crea aquí el objeto que cumpla con la interfaz Book
var book = {
    // Completa aquí los valores de las propiedades
    title: 'Harry Potter y la piedra filosofal,',
    author: 'J.K. Rowling',
    pages: 288,
    isbn: '9788498382662 '
};
printBookInfo(book);
