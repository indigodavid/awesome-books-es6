import Book from "./book.js";
import getLi from "./getLi.js";

const bookList = document.getElementById('book-list');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');

export default class StorageBooks {
  constructor() {
    this.bookData = [];
    const data = localStorage.getItem('bookData');
    if (data) {
      this.bookData = JSON.parse(data);
    }
  }
  static storeData() {
    localStorage.setItem('bookData', JSON.stringify(this.bookData));
  }

  static loadData() {
    const data = localStorage.getItem('bookData');
    if (data) {
      this.bookData = JSON.parse(data);
      this.bookData.forEach((book) => {
        bookList.appendChild(getLi(book.title, book.author, book.id));
      });
      document.querySelectorAll('.remove').forEach((button) => {
        button.addEventListener('click', (e) => {
          StorageBooks.removeLi(button.id);
        })
      });
    }
  }

  static removeLi(id) {
    const li = document.getElementById(`book${id}`);
    li.remove();
    this.bookData = this.bookData.filter((book) => book.id !== id);
    StorageBooks.storeData();
  }

  static addLi() {
    if (newTitle.value && newAuthor.value) {
      const id = this.bookData[this.bookData.length - 1] ? this.bookData[this.bookData.length - 1].id + 1 : 1;
      const book = new Book(newTitle.value, newAuthor.value, id);
      this.bookData.push(book);
      bookList.appendChild(getLi(book.title, book.author, book.id));
      StorageBooks.storeData();
      newTitle.value = '';
      newAuthor.value = '';
    }
  }
}
