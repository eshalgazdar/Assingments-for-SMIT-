const BookModel = require('../models/bookModel');

class BookController {
  static getAllBooks(req, res, next) {
    try {
      const books = BookModel.getAll();
      res.status(200).json({ success: true, count: books.length, data: books });
    } catch (error) {
      next(error);
    }
  }

  static getBookById(req, res, next) {
    try {
      const book = BookModel.getById(req.params.id);
      if (!book) {
        res.status(404);
        throw new Error('Book not found');
      }
      res.status(200).json({ success: true, data: book });
    } catch (error) {
      next(error);
    }
  }

  static createBook(req, res, next) {
    try {
      const { title, author, genre, publishedYear } = req.body;
      if (!title || !author) {
        res.status(400);
        throw new Error('Title and author are required fields');
      }
      const newBook = BookModel.create(req.body);
      res.status(201).json({ success: true, data: newBook });
    } catch (error) {
      next(error);
    }
  }

  static updateBook(req, res, next) {
    try {
      const { title, author, genre, publishedYear, isAvailable } = req.body;
      if (!title || !author) {
        res.status(400);
        throw new Error('Title and author are required for update');
      }
      const updated = BookModel.update(req.params.id, req.body);
      if (!updated) {
        res.status(404);
        throw new Error('Book not found');
      }
      res.status(200).json({ success: true, data: updated });
    } catch (error) {
      next(error);
    }
  }

  static patchBook(req, res, next) {
    try {
      const patched = BookModel.patch(req.params.id, req.body);
      if (!patched) {
        res.status(404);
        throw new Error('Book not found');
      }
      res.status(200).json({ success: true, data: patched });
    } catch (error) {
      next(error);
    }
  }

  static deleteBook(req, res, next) {
    try {
      const deleted = BookModel.delete(req.params.id);
      if (!deleted) {
        res.status(404);
        throw new Error('Book not found');
      }
      res.status(200).json({ success: true, message: 'Book deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BookController;
