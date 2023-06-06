import BookManager from './modules/bookmanager.js';
import { showContent, setupNavigation } from './modules/nav.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  showContent('books');
});

const time = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
const dateElement = document.getElementById('currentDate');
dateElement.textContent = time;

BookManager.initialize();
