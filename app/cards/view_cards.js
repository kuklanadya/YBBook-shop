export default class ViewCards {
   BODY_MAIN = document.body.querySelector("main");
   BODY_HEADER = document.body.querySelector("header");

   renderCards(cards) {
      this.BODY_MAIN.innerHTML = "";
      this.BODY_MAIN.insertAdjacentHTML("beforeend", cards.map(this.getBookHTML).join("")
      );
   }

   renderModalCard({ id, title, author, image, price, description, genre, year, rating }) {
      const modal = `
      <div class="backdrop show-modal">
        <div class="card active" data-id="${id}">
        <span class="close"></span>
          <img src="${image}" class="card-img" alt="${title}"/>
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <!--book name -->
            <p class="card-text">Автор: ${author}</p>
            <div class="card-text card-desc">Описание: ${description}</div>
            <p class="card-text">Год публикации: ${year}</p>
            <p class="card-text">Жанр: ${genre}</p>
            <p class="card-text">Рейтинг: ${rating}</p>
            <p class="card-text">Цена: <span>${price}</span> грн.</p>
            <a href="#" class="btn btn-primary">Купить</a>
          </div>
         </div>
      </div>`;
      this.BODY_MAIN.insertAdjacentHTML("afterbegin", modal);
   }

   addCloseModalListeners = () => {
      const backdrop = document.querySelector(".backdrop");
      document.querySelector(".close").addEventListener("click", this.closeModal);
      document.addEventListener("click", (event) => {
         if (event.target === backdrop) {
            this.closeModal();
         }
      })
   }

   closeModal = () => {
      document.querySelector(".backdrop").remove();
   }

   renderHeader = () => {
      const header = `
      <div>
         <h2>YBBooks</h2>
      </div>`;
      this.BODY_HEADER.insertAdjacentHTML("afterbegin", header);
   }

   getBookHTML({ id, title, author, image, price, description, genre, year, rating }) {
      return `
        <div class="card" data-id="${id}">
          <img src="${image}" class="card-img" alt="${title}"/>
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <!--book name -->
            <p class="card-text">Автор: ${author}</p>
            <p class="card-text">Жанр: ${genre}</p>
            <p class="card-text">Рейтинг: ${rating}</p>
            <p class="card-text">Цена: <span>${price}</span> грн.</p>
            <a href="#" class="btn btn-primary">Купить</a>
          </div>
      </div>`;
   }
}
