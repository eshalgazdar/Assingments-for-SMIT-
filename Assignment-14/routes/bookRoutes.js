const express = require('express');
const router = express.Router();
const {
  createBook,
  getAllBooks,
  searchBooksByTitle,
  getAvailableBooks,
  getBookById,
  replaceBook,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');

router.get('/search', searchBooksByTitle);
router.get('/available', getAvailableBooks);

router.route('/').post(createBook).get(getAllBooks);

router
  .route('/:id')
  .get(getBookById)
  .put(replaceBook)
  .patch(updateBook)
  .delete(deleteBook);

module.exports = router;