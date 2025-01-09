"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
        this.nextId = 1;
    }
    addBook(title, author, publishedYear, genre) {
        const newBook = {
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
    removeBook(id) {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            return true;
        }
        return false;
    }
    listBooks() {
        return this.books;
    }
    findBookById(id) {
        return this.books.find(book => book.id === id);
    }
    checkoutBook(id) {
        const book = this.findBookById(id);
        if (book && !book.isCheckedOut) {
            book.isCheckedOut = true;
            return true;
        }
        return false;
    }
}
exports.Library = Library;
