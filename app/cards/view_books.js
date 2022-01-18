export default class ViewBooks {
   BODY_MAIN = document.body.querySelector("main");
   renderBooks(books) {
      this.BODY_MAIN.insertAdjacentHTML(
         "beforeend",
         books.map(this.getBookHTML).join("")
      );
   }

   getBookHTML({ title, author, image, price, description, genre, year, rating }) {
      return `<div class="card">
        <div class="card m-2" style="width: 18rem">
          <img src="${image}" class="card-img-top" alt="${title}" />
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <!--book name -->
            <p class="card-text">Автор: ${author}</p>
            <p class="card-text">Описание: ${description}</p>
            <p class="card-text">Год публикации: ${year}</p>
            <p class="card-text">Жанр: ${genre}</p>
            <p class="card-text">Рейтинг: ${rating}</p>
            <p class="card-text">Цена: ${price} грн.</p>
            <a href="#" class="btn btn-primary">Купить</a>
          </div>
        </div>
      </div>`;
   }
}
