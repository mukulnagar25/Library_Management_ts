// src/controllers/authorController.ts
import { Request, Response } from 'express';

// Author interface for type safety
export interface Author {
  id: number;
  name: string;
  bio?: string; // Optional field
}

// In-memory array to simulate a database
const authors: Author[] = [];

// Get all authors
export const getAuthors = (req: Request, res: Response): void => {
  res.status(200).json(authors);
};

// Add a new author
export const addAuthor = (req: Request, res: Response): void => {
  const { name, bio } = req.body;

  if (!name) {
    res.status(400).json({ message: 'Author name is required.' });
    return;
  }

  const newAuthor: Author = { id: Date.now(), name, bio };
  authors.push(newAuthor);

  res.status(201).json(newAuthor);
};

// Get an author by ID
export const getAuthorById = (req: Request, res: Response): void => {
  const authorId = parseInt(req.params.id, 10);
  const author = authors.find((a) => a.id === authorId);

  if (!author) {
    res.status(404).json({ message: 'Author not found.' });
    return;
  }

  res.status(200).json(author);
};

// Update an author by ID
export const updateAuthor = (req: Request, res: Response): void => {
  const authorId = parseInt(req.params.id, 10);
  const { name, bio } = req.body;

  const author = authors.find((a) => a.id === authorId);

  if (!author) {
    res.status(404).json({ message: 'Author not found.' });
    return;
  }

  if (name) author.name = name;
  if (bio) author.bio = bio;

  res.status(200).json(author);
};

// Delete an author by ID
export const deleteAuthor = (req: Request, res: Response): void => {
  const authorId = parseInt(req.params.id, 10);
  const index = authors.findIndex((a) => a.id === authorId);

  if (index === -1) {
    res.status(404).json({ message: 'Author not found.' });
    return;
  }

  authors.splice(index, 1);
  res.status(204).send(); // No content
};
