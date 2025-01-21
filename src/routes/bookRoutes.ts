import { Router } from 'express';
import { getAllBooks, addBook, deleteBook } from '../controllers/bookController';

const router = Router();

router.get('/', getAllBooks);
router.post('/', addBook);
router.delete('/:id', deleteBook);

export default router;
