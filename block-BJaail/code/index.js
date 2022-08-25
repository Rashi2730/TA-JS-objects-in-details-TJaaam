class BookList {
  constructor(root, list = []) {
    this.books = list;
    this.root = root;
  }
  addBook(nm, ath, ul) {
    let book = new Book(nm, ath, ul);
    this.books.push(book);
    this.createUI();
  }
  deleteBook(ind) {
    let index = this.todos.findIndex((todo) => todo.ind == ind);
    this.todos.splice(index, 1);
  }
  createUI() {
    this.root.innerHTML = "";
    this.books.forEach((todo) => {
      this.root.append(todo.createUI());
    });
  }
}

class Book {
  constructor(name, author, url) {
    this.name = name;
    this.author = author;
    this.url = url;
    this.isRead = false;
    this.id = `id-${Date.now()}`;
  }
  handleRead() {
    this.isRead = !this.isRead;
  }
  createUI() {
    let div = document.createElement("div");
    let li = document.createElement("li");
    li.style.display = "flex";
    li.style.flexDirection = "column";
    li.style.backgroundColor = "Red";
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = this.isRead;
    input.addEventListener("click", this.handleRead(this));
    let n = document.createElement("p");
    let a = document.createElement("p");
    let u = document.createElement("p");
    n.innerText = this.name;
    a.innerText = this.author;
    u.innerText = this.url;
    let span = document.createElement("span");
    span.innerText = "🗑️";
    span.addEventListener("click", handleDelete());
    div.append(n, a, u);
    li.append(input, div, span);
    return li;
  }
}
