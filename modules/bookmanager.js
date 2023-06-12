import { displayBooks, addBook, addEventListeners } from './operations.js';

export default class BookManager {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.booksDiv = document.getElementById('bookContainer');
    this.addBookForm = document.getElementById('addBookForm');
    this.titleInput = document.getElementById('titleInput');
    this.authorInput = document.getElementById('authorInput');

    this.displayBooks();
    this.addEventListeners();
  }

  displayBooks = () => {
    displayBooks(this.books, this.booksDiv);
  };

  addBook = (title, author) => {
    addBook(this.books, title, author, this.booksDiv);
  };

  addEventListeners = () => {
    addEventListeners(this.addBookForm, this.titleInput, this.authorInput, this.addBook);
  };

  static initialize() {
    const bookManager = new BookManager();
    return bookManager;
  }
}
