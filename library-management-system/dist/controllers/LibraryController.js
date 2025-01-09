"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryController = void 0;
const Library_1 = require("../models/Library");
class LibraryController {
    constructor() {
        this.library = new Library_1.Library();
    }
    addBook(title, author, publishedYear, genre) {
        return this.library.addBook(title, author, publishedYear, genre);
    }
    removeBook(id) {
        return this.library.removeBook(id);
    }
    listBooks() {
        return this.library.listBooks();
    }
    checkoutBook(id) {
        return this.library.checkoutBook(id);
    }
}
exports.LibraryController = LibraryController;
