export default class ViewModal {
   BODY_MAIN = document.body.querySelector("main");

   addListeners(listener) {
      [...document.querySelectorAll(".card")]
         .forEach(card => card.addEventListener("click", listener))
   }

   renderModalCard({ id, title, author, image, price, description, genre, year, rating }) {
      const modal = `
      <div class="backdrop show-modal">
        <div class="card active" data-id="${id}">
        <img src="${image}" class="card-img" alt="${title}"/>
        <span class="close"></span>
          <div class="card-body">
            <p class="card-title">${title}</p>
            <p class="card-text">${author}</p>
            <div class="card-text card-desc">Описание: ${description}</div>
            <p class="card-text">Год публикации: ${year}</p>
            <p class="card-text">Жанр: ${genre}</p>
            <p class="card-text">Рейтинг: ${rating}</p>
            <p class="card-text">Цена: <span>${price}₴</span></p>
            <a href="#" class="btn buy">Добавить в корзину</a>
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
}