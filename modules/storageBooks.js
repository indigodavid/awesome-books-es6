export default class StorageBooks {
  static storeData() {
    localStorage.setItem('bookData', JSON.stringify(bookData));
  }

  static loadData() {
    bookData = [];
    const data = localStorage.getItem('bookData');
    if (data) {
      bookData = JSON.parse(data);
      bookData.forEach((book) => {
        bookList.appendChild(getLi(book.title, book.author, book.id));
      });
    }
  }

  static removeLi(id) {
    const li = document.getElementById(`book${id}`);
    li.remove();
    bookData = bookData.filter((book) => book.id !== id);
    StorageBooks.storeData();
  }

  static addLi() {
    if (newTitle.value && newAuthor.value) {
      const id = bookData[bookData.length - 1] ? bookData[bookData.length - 1].id + 1 : 1;
      const book = new Book(newTitle.value, newAuthor.value, id);
      bookData.push(book);
      bookList.appendChild(getLi(book.title, book.author, book.id));
      StorageBooks.storeData();
    }
  }
}
