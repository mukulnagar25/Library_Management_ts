import { Request, Response } from 'express';
import { Book } from '../models/book';

let books: Book[] = [];

export const getAllBooks = (req: Request, res: Response) => {
  res.json(books);
};

export const addBook = (req: Request, res: Response) => {
  const newBook: Book = { id: Date.now(), ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
};

export const deleteBook = (req: Request, res: Response) => {
  const { id } = req.params;
  books = books.filter((book) => book.id !== parseInt(id));
  res.status(204).send();
};
