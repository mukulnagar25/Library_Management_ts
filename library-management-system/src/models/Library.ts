import { Book } from './Book';

export class Library {
  private books: Book[] = [];
  private nextId: number = 1;

  addBook(title: string, author: string, publishedYear: number, genre: string): Book {
    const newBook: Book = {
      id: this.nextId++,
      title,
      author,
      publishedYear,
      genre,
      isCheckedOut: false,
    };
    this.books.push(newBook);
    return newBook;
  }

  removeBook(id: number): boolean {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }

  listBooks(): Book[] {
    return this.books;
  }

  findBookById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  checkoutBook(id: number): boolean {
    const book = this.findBookById(id);
    if (book && !book.isCheckedOut) {
      book.isCheckedOut = true;
      return true;
    }
    return false;
  }
}
