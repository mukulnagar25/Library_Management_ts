import { Library } from '../models/Library';

export class LibraryController {
  private library: Library;

  constructor() {
    this.library = new Library();
  }

  addBook(title: string, author: string, publishedYear: number, genre: string) {
    return this.library.addBook(title, author, publishedYear, genre);
  }

  removeBook(id: number): boolean {
    return this.library.removeBook(id);
  }

  listBooks() {
    return this.library.listBooks();
  }

  checkoutBook(id: number): boolean {
    return this.library.checkoutBook(id);
  }
}
