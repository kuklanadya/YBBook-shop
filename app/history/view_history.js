export default class ViewHistory {
   BODY_MAIN = document.body.querySelector("main");
   constructor(handleHistoryClick) {
      document.querySelector('.interface-history').addEventListener("click", handleHistoryClick);
   }

   renderHistory = () => {
      const history = `
      <div class="backdrop show-modal">
      <div class="cart-modal">
      <span class="close history"></span>
         <div class="history-modal-title">История заказов</div>
         <div class="history-modal-header">
            <div>Описание</div>
            <div class="cart-modal-header-quantity">Количество</div>
            <div class="cart-modal-header-price">Цена</div>
         </div>
         <div class="noorders">История заказов пуста</div>
         <div class="history-modal-items">
         </div>
      </div>
      </div>
      `;
      this.BODY_MAIN.insertAdjacentHTML("afterbegin", history);
   }

   isHistoryEmpty = (goods) => {
      document.body.querySelector(".noorders").style.display = 'block';
      document.body.querySelector(".history-modal-header").style.display = 'none';
      if (goods.length > 0) {
         document.body.querySelector(".noorders").style.display = 'none';
         document.body.querySelector(".history-modal-header").style.display = 'grid';
      }
   }

   renderOrders = (goods) => {
      document.body.querySelector(".history-modal-items").innerHTML = '';
      for (const { id, title, author, image, price, quantity } of goods) {
         const good = `
         <div class="cart-modal-item" data-id="${id}">
            <div class="cart-modal-desc">
               <img src="${image}" alt="img" class="cart-modal-img">
                  <div class="card-head">
                     <p class="card-title">${title}</p>
                     <p class="card-text">${author}</p>
                  </div>
            </div>
            <div class="cart-modal-quantity">${quantity}</div>
            <div class="cart-modal-price">${price}₴</div>
         </div>`
         document.body.querySelector(".history-modal-items").insertAdjacentHTML("afterbegin", good);
      }
   }

   addCloseModalListeners = () => {
      const backdrop = document.querySelector(".backdrop");
      document.querySelector(".close.history").addEventListener("click", this.closeModal);
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