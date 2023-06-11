import BookManager from './modules/bookmanager.js';
import { showContent, setupNavigation } from './modules/nav.js';
import { DateTime } from './modules/luxon.js';

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  showContent('books');
});
const time = DateTime.now();
const dateElement = document.getElementById('currentDate');
dateElement.textContent = time.toJSDate().toString();

BookManager.initialize();
