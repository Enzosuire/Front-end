function AfficherLivres(selectedAuthor, selectedCategory, data) {
  const booksContainer = document.getElementById('booksContainer');
  booksContainer.innerHTML = '';

  data.forEach((book) => {
    if ((!selectedAuthor || book.authors.includes(selectedAuthor)) &&
        (!selectedCategory || book.categories.includes(selectedCategory))) {
      const col = document.createElement('div');
      col.classList.add('col-md-3');
      col.classList.add('col-sm-6'); 
      col.classList.add('col-12'); 
      col.classList.add('mt-4');
      col.classList.add('p-4');

      const card = document.createElement('div');
      card.classList.add('card');
      card.classList.add('p-2');

      const cardImage = document.createElement('img');
      if (book.thumbnailUrl) {
        cardImage.src = book.thumbnailUrl;
      } else {
        cardImage.src = 'https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png';
      }
      cardImage.classList.add('card-image');

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const title = document.createElement('h2');
      title.textContent = book.title;
      title.classList.add('card-title');

      const isbn = document.createElement('p');
      isbn.textContent = 'ISBN: ' + book.isbn;
      isbn.classList.add('card-isbn');

      const publicationDate = document.createElement('p');
      if (book.publishedDate && book.publishedDate.dt_txt) {
        publicationDate.textContent = 'Date de publication : ' + book.publishedDate.dt_txt;
      } else {
        publicationDate.textContent = 'Date de publication non disponible';
      }
      publicationDate.classList.add('card-date');

      const pageCount = document.createElement('p');
      pageCount.textContent = 'Nombre de pages: ' + book.pageCount;
      pageCount.classList.add('card-pages');

      const description = document.createElement('p');
      description.textContent = 'Description: ' + book.shortDescription;
      description.classList.add('card-description');

      cardBody.appendChild(title);
      cardBody.appendChild(isbn);
      cardBody.appendChild(publicationDate);
      cardBody.appendChild(pageCount);
      cardBody.appendChild(description);

      card.appendChild(cardImage);
      card.appendChild(cardBody);

      col.appendChild(card);
      booksContainer.appendChild(col);
    }
  });
}

function NomAutCat() {
  const fileURL = './books.json';
  const selectElement = document.getElementById('auteurSelect');
  const selectCategories = document.getElementById('catégorieselect');

  selectElement.addEventListener('change', function () {
    selectCategories.disabled = true; 
    selectCategories.selectedIndex = 0;
    const selectedAuthor = selectElement.value;
    AfficherLivres(selectedAuthor, null, data); 
  });

  selectCategories.addEventListener('change', function () {
    selectElement.disabled = true; 
    selectElement.selectedIndex = 0; 
    const selectedCategory = selectCategories.value;
    AfficherLivres( selectedCategory, null, data); 
  });

  fetch(fileURL)
    .then((response) => response.json())
    .then((data) => {
      const authorsSet = new Set();
      const categoriesSet = new Set();

     

      data.forEach((book) => {
        book.authors.forEach((author) => {
          authorsSet.add(author);
        });

        if (book.categories) {
          book.categories.forEach((category) => {
            categoriesSet.add(category);
          });
        }
      });

      authorsSet.forEach((author) => {
        const option = document.createElement('option');
        option.value = author;
        option.textContent = author;
        selectElement.appendChild(option);
      });

      categoriesSet.forEach((category) => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        selectCategories.appendChild(option);
      });

      selectElement.addEventListener('change', function () {
        const selectedAuthor = selectElement.value;
        const selectedCategory = selectCategories.value;

        AfficherLivres(selectedAuthor, selectedCategory, data);
      });

      selectCategories.addEventListener('change', function () {
        const selectedAuthor = selectElement.value;
        const selectedCategory = selectCategories.value;

        AfficherLivres(selectedAuthor, selectedCategory, data);
      });

      AfficherLivres(null, null, data);
    });
}


document.addEventListener('DOMContentLoaded', NomAutCat);