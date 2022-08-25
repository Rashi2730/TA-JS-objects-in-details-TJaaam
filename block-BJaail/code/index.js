let form = document.querySelector(".form");
let bookListRoot = document.querySelector(".book-list");

const titleElm = form.elements.title;
const authorElm = form.elements.author;
const numberElm = form.elements.number;

class BookList {
  constructor(books = []) {
    this.books = books;
  }
  addBook(title, author, number) {
    let book = new Book(title, author, number);
    this.books.push(book);
    this.createUI();
  }
  createUI() {
    bookListRoot.innerHTML = "";
    this.books.forEach((book) => {
      let container = document.createElement("div");
      let div = document.createElement("div");
      let h2 = document.createElement("h2");
      h2.innerText = book.title;
      let img = document.createElement("img");
      img.src = book.number;
      let button = document.createElement("button");
      button.innerText = book.isRead ? "completed" : "Mark as read";
      button.addEventListener("click", () => {
        book.toggleIsRead();
        this.createUI();
      });
      let p = document.createElement("p");
      p.innerText = book.author;
      div.append(h2, p, button);
      container.append(img, div);
      bookListRoot.append(container);
    });
  }
}

class Book {
  constructor(title, author, number) {
    this.title = title;
    this.author = author;
    this.number = number;
    this.isRead = false;
    this.id = `id-${Date.now()}`;
  }
  toggleIsRead() {
    this.isRead = !this.isRead;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const title = titleElm.value;
  const author = authorElm.value;
  const number = numberElm.value;
  library.addBook(title, author, number);
  titleElm.value = "";
  authorElm.value = "";
  numberElm.value = "";
}

form.addEventListener("submit", handleSubmit);

let library = new BookList();
library.addBook(
  "The Catcher in the Rye",
  "Paperback",
  "https://images-na.ssl-images-amazon.com/images/I/418bOQWiRBL._SX304_BO1,204,203,200_.jpg"
);
