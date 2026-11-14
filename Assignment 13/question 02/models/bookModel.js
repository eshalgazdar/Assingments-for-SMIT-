let books = [];
let currentId = 1;

class BookModel {
  static getAll() {
    return books;
  }

  static getById(id) {
    return books.find(b => b.id === parseInt(id));
  }

  static create(bookData) {
    const newBook = {
      id: currentId++,
      title: bookData.title,
      author: bookData.author,
      genre: bookData.genre,
      publishedYear: bookData.publishedYear,
      isAvailable: bookData.isAvailable !== undefined ? bookData.isAvailable : true
    };
    books.push(newBook);
    return newBook;
  }

  static update(id, bookData) {
    const index = books.findIndex(b => b.id === parseInt(id));
    if (index === -1) return null;
    
    books[index] = {
      id: parseInt(id),
      title: bookData.title,
      author: bookData.author,
      genre: bookData.genre,
      publishedYear: bookData.publishedYear,
      isAvailable: bookData.isAvailable
    };
    return books[index];
  }

  static patch(id, bookData) {
    const book = books.find(b => b.id === parseInt(id));
    if (!book) return null;

    if (bookData.title !== undefined) book.title = bookData.title;
    if (bookData.author !== undefined) book.author = bookData.author;
    if (bookData.genre !== undefined) book.genre = bookData.genre;
    if (bookData.publishedYear !== undefined) book.publishedYear = bookData.publishedYear;
    if (bookData.isAvailable !== undefined) book.isAvailable = bookData.isAvailable;

    return book;
  }

  static delete(id) {
    const index = books.findIndex(b => b.id === parseInt(id));
    if (index === -1) return null;
    return books.splice(index, 1)[0];
  }
}

module.exports = BookModel;