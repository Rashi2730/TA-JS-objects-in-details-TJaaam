class BookList {
  constructor() {
    this.books = [];
    this.index = 0;
  }
  add(Books = []) {
    this.books = this.books.concat(Books);
    return this.books;
  }
  getCurrentBook() {
    return this.books[this.index];
  }
  getNextBook() {
    this.index = this.index + 1;
    return this.books[this.index];
  }
  getPreviousBook() {
    this.index = this.index - 1;
    return this.books[this.index];
  }
  changeCurrentBook(ind) {
    this.index = ind;
    return this.books[this.index];
  }
}

class Book {
  constructor(title, category, author) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = false;
    this.finishedDate = null;
  }
  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.now();
    return this.finishedDate;
  }
}

// ## An object-oriented book-list!
// - [ ] Create a class BookList
// - [ ] Create another class called Book
// #### Each Book should have several properties:
// 1. Title
// 2. Category
// 3. Author
// 4. isRead (default to `false`)
// 5. finishedDate
// Book class will have the following methods:
// - `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.
// #### BookList should have the following properties:
// 1. An array of all the Books
// 2. Current read book index
// #### BookList Methods
// - [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
// - [] `getCurrentBook()` should return the current book using the `index` and the book array
// - [] `getNextBook()` should return the next book using the `index` and the book array
// - [] `getPrevBook()` should return the previous book using the `index` and the book array
// - [] `changeCurrentBook` should accept one parameter and update the current index.
// After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.

let book1 = new Book(`The Conjuring`, `Horror`, `XYZ`);
console.group(book1.title);
console.log(book1.author);
console.log(book1.finishedDate);
console.log(book1.markBookAsRead());
console.log(book1.isRead);
console.log(book1.finishedDate);
console.groupEnd();

let book2 = new Book(`The Conjuring 2`, `Horror`, `XYZ`);
console.group(book2.title);
console.log(book2.author);
console.log(book2.finishedDate);
console.log(book2.markBookAsRead());
console.log(book2.isRead);
console.log(book2.finishedDate);
console.groupEnd();

let book3 = new Book(`Anabelle`, `Horror`, `XYZ`);
console.group(book3.title);
console.log(book3.author);
console.log(book3.finishedDate);
console.log(book3.markBookAsRead());
console.log(book3.isRead);
console.log(book3.finishedDate);
console.groupEnd();

let book4 = new Book(`To All the boys I ever Dated`, `Romantic`, `XYZ`);
console.group(book4.title);
console.log(book4.author);
console.log(book4.finishedDate);
console.log(book4.markBookAsRead());
console.log(book4.isRead);
console.log(book4.finishedDate);
console.groupEnd();

let book5 = new Book(`Thor , Love and Thunder`, `Action`, `XYZ`);
console.group(book5.title);
console.log(book5.author);
console.log(book5.finishedDate);
console.log(book5.markBookAsRead());
console.log(book5.isRead);
console.log(book5.finishedDate);
console.groupEnd();

let booklist = new BookList();
booklist.add([book1, book2, book3, book4, book5]);
console.log(booklist.books);
console.log(booklist.index);
console.log(booklist.getCurrentBook());
