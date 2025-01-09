import { LibraryController } from '../controllers/LibraryController';
import * as readline from 'readline';

const libraryController = new LibraryController();

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display a menu for user actions
function showMenu() {
  console.log('\nLibrary Management System');
  console.log('1. Add a Book');
  console.log('2. Remove a Book');
  console.log('3. List All Books');
  console.log('4. Checkout a Book');
  console.log('5. Exit');
  rl.question('Choose an option: ', handleUserChoice);
}

// Handle user choice
function handleUserChoice(choice: string) {
  switch (choice.trim()) {
    case '1':
      rl.question('Enter book details (title, author, year, genre) separated by commas: ', (input) => {
        const [title, author, year, genre] = input.split(',').map((item) => item.trim());
        if (title && author && year && genre) {
          const book = libraryController.addBook(title, author, parseInt(year, 10), genre);
          console.log(`Book added: ${JSON.stringify(book)}`);
        } else {
          console.log('Invalid input. Please try again.');
        }
        showMenu();
      });
      break;

    case '2':
      rl.question('Enter the ID of the book to remove: ', (id) => {
        const success = libraryController.removeBook(parseInt(id.trim(), 10));
        console.log(success ? 'Book removed successfully.' : 'Book not found.');
        showMenu();
      });
      break;

    case '3':
      console.log('Listing all books:');
      const books = libraryController.listBooks();
      if (books.length > 0) {
        books.forEach((book) => console.log(JSON.stringify(book)));
      } else {
        console.log('No books available.');
      }
      showMenu();
      break;

    case '4':
      rl.question('Enter the ID of the book to checkout: ', (id) => {
        const success = libraryController.checkoutBook(parseInt(id.trim(), 10));
        console.log(success ? 'Book checked out successfully.' : 'Book not found or already checked out.');
        showMenu();
      });
      break;

    case '5':
      console.log('Exiting... Goodbye!');
      rl.close();
      break;

    default:
      console.log('Invalid choice. Please try again.');
      showMenu();
      break;
  }
}

// Start the application
showMenu();
