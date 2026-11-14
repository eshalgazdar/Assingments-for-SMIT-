const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');

router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getBookById);
router.post('/', BookController.createBook);
router.put('/:id', BookController.updateBook);
router.patch('/:id', BookController.patchBook);
router.delete('/:id', BookController.deleteBook);

module.exports = router;