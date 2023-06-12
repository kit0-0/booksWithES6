export const displayBooks = (books, booksDiv) => {
  booksDiv.innerHTML = '';

  if (books.length === 0) {
    booksDiv.textContent = 'No books in the collection.';
    return;
  }

  const removeBook = (index) => {
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks(books, booksDiv);
  };

  books.forEach((book, index) => {
    booksDiv.innerHTML += `<div class="book">
                <span class="book-title">${book.title}</span>
                <span class="book-author">by ${book.author}</span>
                <button class="remove-button" type="button" data-index="${index}">Remove</button>
              </div>`;
  });

  const removeButtons = document.getElementsByClassName('remove-button');
  Array.from(removeButtons).forEach((button, index) => {
    button.addEventListener('click', () => {
      removeBook(index);
    });
  });
};

export const addBook = (books, title, author, booksDiv) => {
  const book = {
    title,
    author,
  };

  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks(books, booksDiv);
};

export const addEventListeners = (addBookForm, titleInput, authorInput, addBook) => {
  addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addBook(titleInput.value, authorInput.value);
    titleInput.value = '';
    authorInput.value = '';
  });
};
