// src/routes/authorRoutes.ts
import { Router } from 'express';
import {
  getAuthors,
  addAuthor,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
} from '../controllers/authorController';

const router = Router();

// Define routes for authors
router.get('/', getAuthors); // GET /authors - Get all authors
router.post('/', addAuthor); // POST /authors - Add a new author
router.get('/:id', getAuthorById); // GET /authors/:id - Get author by ID
router.put('/:id', updateAuthor); // PUT /authors/:id - Update an author
router.delete('/:id', deleteAuthor); // DELETE /authors/:id - Delete an author

export default router;
