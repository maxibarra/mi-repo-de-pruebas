interface Book {
  // Completa aquí la definición de la interfaz
  title: string;
  author: string;
  pages: number;
  isbn: string;
}

function printBookInfo(book: Book) {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Pages: ${book.pages}`);
  console.log(`ISBN: ${book.isbn}`);
}

// Crea aquí el objeto que cumpla con la interfaz Book
const book: Book = {
  // Completa aquí los valores de las propiedades
  title: 'Harry Potter y la piedra filosofal,',
  author:'J.K. Rowling',
  pages:288, 
  isbn:'9788498382662 '
};

printBookInfo(book);