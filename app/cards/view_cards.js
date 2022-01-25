export default class ViewCards {
   BODY_MAIN = document.body.querySelector("main");
   BODY_HEADER = document.body.querySelector("header");

   constructor(handleAddToCart, handleChangeQuantity) {
      this.handleAddToCart = handleAddToCart;
      this.handleChangeQuantity = handleChangeQuantity;
   }

   addToCartListener = () => {
      [...document.querySelectorAll(".buy")]
         .forEach(btn => btn.addEventListener('click', this.handleAddToCart));

   }

   addChangeQuantityListener = () => {
      [...document.querySelectorAll(".cart-modal-add")]
         .forEach(btn => btn.addEventListener('click', this.handleChangeQuantity));
   }

   renderCards(cards) {
      this.BODY_MAIN.innerHTML = "";
      this.BODY_MAIN.insertAdjacentHTML("beforeend", cards.map(this.getBookHTML).join(""));
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

   addGenresAccordion() {
      const header = document.querySelector(".accordion_header");
      const content = header.nextElementSibling;
      header.addEventListener('click', () => {
         header.classList.toggle('active');
         content.classList.toggle('active');
      });
   }

   renderHeader = () => {
      const header = `
      <div class="interface">
         <h2 class="interface-title">YBBooks</h2>
         <div class="interface-icons">
            <div class="interface-history">
               <a><img src="/img/history.svg" alt="history"></a>
            </div>
            <div class="interface-cart">
            <a><img src="/img/cart.svg" alt="history"></a>
            </div>
         </div>
      </div>`;
      this.BODY_HEADER.insertAdjacentHTML("afterbegin", header);
   }

   getBookHTML({ id, title, author, image, price, genre, rating }) {
      return `
      <div class="card" data-id="${id}">
         <div class="card-head">
          <p class="card-title">${title}</p>
            <p class="card-text">${author}</p>
         </div>
         <p class="card-text card-genre">${genre}</p>
         <img src="${image}" class="card-img" alt="${title}" />
         <p class="card-text card-rating"><span>${rating}</span></p>
         <div class="card-buy">
            <p class="card-text"><span>${price}₴</span></p>
         </div>
      </div>`;
   }
}
