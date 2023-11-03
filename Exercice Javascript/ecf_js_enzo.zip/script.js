// Fonction pour afficher les livres en fonction de l'auteur et de la catégorie sélectionnés
function AfficherLivres(selectedAuthor, selectedCategory, data) {
  // Récupère le conteneur des livres dans le HTML
  const booksContainer = document.getElementById('booksContainer');

  // Efface le contenu actuel du conteneur
  booksContainer.innerHTML = '';

  // Parcours les données des livres
  data.forEach((book) => {
    
    // Vérifie si le livre correspond aux sélections d'auteur et de catégorie (ou les ignore si non sélectionnées)

    // Le point est un opérateur de négation logique il est utilisé pour inverser une valeur booléenne
    //Dans cette condition permet de vérifier si aucun auteur n'a été sélectionné.
    if ((!selectedAuthor || book.authors.includes(selectedAuthor)) &&
        (!selectedCategory || book.categories.includes(selectedCategory))) {
      // Crée un élément de colonne pour le livre
      const col = document.createElement('div');
      col.classList.add('col-md-3');
      col.classList.add('col-sm-6');
      col.classList.add('col-12');
      col.classList.add('mt-4');
      col.classList.add('p-4');

      // Crée un élément de carte pour le livre
      const card = document.createElement('div');
      card.classList.add('card');
      card.classList.add('p-2');

      // Crée une image de la carte en fonction de l'URL de l'image du livre ou une image par défaut
      const cardImage = document.createElement('img');
      if (book.thumbnailUrl) {
        cardImage.src = book.thumbnailUrl;
      } else {
        cardImage.src = 'https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png';
      }
      cardImage.classList.add('card-image');

      // Crée le corps de la carte
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      // Crée des éléments pour le titre, l'ISBN, la date de publication, le nombre de pages et la description du livre
      const title = document.createElement('h2');
      title.textContent = book.title;
      title.classList.add('card-title');

      const isbn = document.createElement('p');
      isbn.textContent = 'ISBN: ' + book.isbn;
      isbn.classList.add('card-isbn');

      const publicationDate = document.createElement('p');
      // Vérifie si la date de publication est disponible dans les données du livre
      if (book.publishedDate && book.publishedDate.dt_txt){
      
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

      // Ajoute les éléments au corps de la carte
      cardBody.appendChild(title);
      cardBody.appendChild(isbn);
      cardBody.appendChild(publicationDate);
      cardBody.appendChild(pageCount);
      cardBody.appendChild(description);

      // Ajoute l'image et le corps de la carte à la colonne
      card.appendChild(cardImage);
      card.appendChild(cardBody);

      // Ajoute la carte à la colonne
      col.appendChild(card);

      // Ajoute la colonne au conteneur des livres
      booksContainer.appendChild(col);
    }
  });
}

// Fonction pour initialiser les listes déroulantes des auteurs et des catégories
function NomAutCat() {
  
  const fileURL = './books.json';

  // Récupère les éléments de liste déroulante des auteurs et des catégories
  const selectElement = document.getElementById('auteurSelect');
  const selectCategories = document.getElementById('catégorieselect');

  // Écoute l'événement de changement de l'élément de liste déroulante des auteurs
  selectElement.addEventListener('change', function () {
    selectCategories.disabled = true;
    selectCategories.selectedIndex = 0;
    const selectedAuthor = selectElement.value;
    // Appelle la fonction pour afficher les livres en fonction de l'auteur sélectionné
    AfficherLivres(selectedAuthor, null, data);
  });

  // Écoute l'événement de changement de l'élément de liste déroulante des catégories
  selectCategories.addEventListener('change', function () {
    selectElement.disabled = true;
    selectElement.selectedIndex = 0;
    const selectedCategory = selectCategories.value;
    // Appelle la fonction pour afficher les livres en fonction de la catégorie sélectionnée
    AfficherLivres(selectedCategory, null, data);
  });

  // Charge les données des livres depuis le fichier JSON
  fetch(fileURL)
    .then((response) => response.json())
    .then((data) => {
      //création deux objets Set distincts c'est pour stocker des valeurs uniques dont les auteurs 

      const authorsSet = new Set();
      const categoriesSet = new Set();

      // const sortedAuthors = [...authorsSet].sort();
      // const sortedCategories = [...categoriesSet].sort();

     

      // Parcourt les données pour collecter les auteurs uniques et les catégories uniques
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
     

      // Ajoute les options des auteurs et des catégories aux éléments de liste déroulante
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

      // Écoute les événements de changement sur les éléments de liste déroulante et appelle la fonction pour afficher les livres
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

      // Affiche tous les livres par défaut
      AfficherLivres(null, null, data);
    });
}

// Écoute l'événement DOMContentLoaded pour exécuter la fonction NomAutCat lors du chargement complet de la page
document.addEventListener('DOMContentLoaded', NomAutCat);
