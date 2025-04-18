function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// ---------- INDEX PAGE ----------
if (document.getElementById('book_list')) {
  const booksList = document.getElementById('book_list');

  let books = JSON.parse(localStorage.getItem('books')) || [];

  booksList.innerHTML = '';
  books.forEach((book, index) => {
    const listItem = document.createElement('li');
    listItem.style.marginBottom = '10px';

    const bookLink = document.createElement('a');
    bookLink.href = `book-details.html?id=${index}`;
    bookLink.textContent = book.name;
    bookLink.style.fontWeight = 'bold';
    bookLink.style.marginRight = '20px';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.style.backgroundColor = '#002855';
    editBtn.style.color = 'white';
    editBtn.style.marginRight = '10px';
    editBtn.onclick = () => {
      window.location.href = `edit-book.html?id=${index}`;
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.backgroundColor = '#C8102E';
    deleteBtn.style.color = 'white';
    deleteBtn.onclick = () => {
      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
      location.reload();
    };

    const actionDiv = document.createElement('div');
    actionDiv.className = 'actions';
    actionDiv.appendChild(editBtn);
    actionDiv.appendChild(deleteBtn);

    listItem.appendChild(bookLink);
    listItem.appendChild(actionDiv);
    booksList.appendChild(listItem);
  });
}

// ---------- CREATE PAGE ----------
if (document.getElementById('create-book-form')) {
  document.getElementById('create-book-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const author = document.getElementById('author').value.trim();
    const editorial = document.getElementById('editorial').value.trim();
    const edition = document.getElementById('edition').value.trim();
    const number_of_pages = parseInt(document.getElementById('number_of_pages').value.trim());
    const topics = document.getElementById('topics').value.trim();

    if (name.length < 3 || isNaN(number_of_pages) || number_of_pages <= 0) {
      alert("Please enter valid name and number of pages.");
      return;
    }

    const newBook = {
      name,
      author,
      editorial,
      edition,
      number_of_pages,
      topics
    };

    // Save to localStorage
    let existingBooks = JSON.parse(localStorage.getItem('books')) || [];
    existingBooks.push(newBook);
    localStorage.setItem('books', JSON.stringify(existingBooks));

    // Optional: Send to mock API
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(res => res.json()).then(data => {
      console.log("Mock API response:", data);
    });

    window.location.href = 'index.html';
  });
}

// ---------- EDIT PAGE ----------
if (document.getElementById('edit-book-form')) {
  const id = getQueryParam('id');
  let books = JSON.parse(localStorage.getItem('books')) || [];
  const book = books[id];

  if (book) {
    document.getElementById('name').value = book.name;
    document.getElementById('author').value = book.author;
    document.getElementById('editorial').value = book.editorial;
    document.getElementById('edition').value = book.edition;
    document.getElementById('number_of_pages').value = book.number_of_pages;
    document.getElementById('topics').value = book.topics;
  }

  document.getElementById('edit-book-form').addEventListener('submit', function (event) {
    event.preventDefault();

    books[id] = {
      name: document.getElementById('name').value.trim(),
      author: document.getElementById('author').value.trim(),
      editorial: document.getElementById('editorial').value.trim(),
      edition: document.getElementById('edition').value.trim(),
      number_of_pages: parseInt(document.getElementById('number_of_pages').value.trim()),
      topics: document.getElementById('topics').value.trim()
    };

    localStorage.setItem('books', JSON.stringify(books));
    alert("Book updated!");
    window.location.href = 'index.html';
  });
}

// ---------- DETAIL PAGE ----------
if (document.getElementById('book-detail')) {
  const bookId = getQueryParam('id');
  let books = JSON.parse(localStorage.getItem('books')) || [];
  const book = books[bookId];
  const bookDetailDiv = document.getElementById('book-detail');

  if (book) {
    bookDetailDiv.innerHTML = `
      <h2>${book.name}</h2>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Editorial:</strong> ${book.editorial}</p>
      <p><strong>Edition:</strong> ${book.edition}</p>
      <p><strong>Number of Pages:</strong> ${book.number_of_pages}</p>
      <p><strong>Topics:</strong> ${book.topics}</p>
    `;
  } else {
    bookDetailDiv.innerHTML = '<p>Book not found.</p>';
  }
}
