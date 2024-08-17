import express from "express";
import {
    addBook,
    delBook,
    getBook,
    getBooks,
    updateBook,
} from '../controllers/booksController.js';
const router=express.Router();

router.get('/', getBooks);

router.get('/:id', getBook);

router.post('/', addBook);

router.put('/:id',updateBook);

router.delete('/:id', delBook);

export default router;