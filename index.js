import StorageBooks from './modules/storageBooks.js';
import toggleVisbility from './modules/toggleVisibility.js';
import clearClasses from './modules/clearClasses.js';
import { DateTime } from 'luxon';

const addBook = document.getElementById('add-book');
const allBooksSection = document.getElementById('all-books');
const addNewBookSection = document.getElementById('add-new-book');
const contactSection = document.getElementById('contact');
const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

document.getElementById('date').innerHTML = DateTime.now().toLocaleString(
  DateTime.DATETIME_MED
);
// Load books in local storage
document.addEventListener('DOMContentLoaded', StorageBooks.loadData);

// Add books from form
addBook.addEventListener('click', StorageBooks.addLi);

// Set visible the book list
allBooksSection.classList.add('active');
allBooksSection.classList.remove('hide-class');

listLink.addEventListener('click', () => {
  toggleVisbility(allBooksSection);
  clearClasses(addNewBookSection, contactSection);
});

addLink.addEventListener('click', () => {
  toggleVisbility(addNewBookSection);
  clearClasses(allBooksSection, contactSection);
});

contactLink.addEventListener('click', () => {
  toggleVisbility(contactSection);
  clearClasses(allBooksSection, addNewBookSection);
});
