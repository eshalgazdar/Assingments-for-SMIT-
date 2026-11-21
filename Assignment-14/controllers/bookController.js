const Book = require('../models/bookModel');

// @desc    Create a new book
// @route   POST /api/books
const createBook = async (req, res, next) => {
  try {
    const { title, author, category, publishedYear, available } = req.body;

    const book = await Book.create({
      title,
      author,
      category,
      publishedYear,
      available,
    });

    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Retrieve all books
// @route   GET /api/books
const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();

    res.status(200).json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Search books by title
// @route   GET /api/books/search?title=Node
const searchBooksByTitle = async (req, res, next) => {
  try {
    const { title } = req.query;

    if (!title || title.trim() === '') {
      res.status(400);
      throw new Error('Please provide a title query parameter to search');
    }

    const books = await Book.find({
      title: { $regex: title.trim(), $options: 'i' },
    });

    res.status(200).json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Retrieve only available books
// @route   GET /api/books/available
const getAvailableBooks = async (req, res, next) => {
  try {
    const books = await Book.find({ available: true });

    res.status(200).json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Retrieve one book by MongoDB _id
// @route   GET /api/books/:id
const getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      res.status(404);
      throw new Error('Book not found');
    }

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Replace/update a book completely
// @route   PUT /api/books/:id
const replaceBook = async (req, res, next) => {
  try {
    const { title, author, category, publishedYear, available } = req.body;

    if (
      title === undefined ||
      author === undefined ||
      category === undefined ||
      publishedYear === undefined
    ) {
      res.status(400);
      throw new Error(
        'PUT requires all required fields: title, author, category, publishedYear'
      );
    }

    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        title,
        author,
        category,
        publishedYear,
        available: available !== undefined ? available : true,
      },
      {
        new: true,
        runValidators: true,
        overwrite: true,
      }
    );

    if (!book) {
      res.status(404);
      throw new Error('Book not found');
    }

    res.status(200).json({
      success: true,
      message: 'Book replaced successfully',
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update selected book fields
// @route   PATCH /api/books/:id
const updateBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      res.status(404);
      throw new Error('Book not found');
    }

    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a book by _id
// @route   DELETE /api/books/:id
const deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      res.status(404);
      throw new Error('Book not found');
    }

    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBook,
  getAllBooks,
  searchBooksByTitle,
  getAvailableBooks,
  getBookById,
  replaceBook,
  updateBook,
  deleteBook,
};