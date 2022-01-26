export default class ViewCart {
   BODY_MAIN = document.body.querySelector("main");
   constructor(publisher) {
      this.publisher = publisher;
   }

   init() {
      this.addListener();
   }

   addListener() {
      document.querySelector('.interface-cart').addEventListener("click", this.renderCart);
   }

   renderCart = () => {
      const cart = `
      <div class="backdrop show-modal">
      <div class="cart-modal">
      <span class="close"></span>
         <div class="cart-modal-header">
            <div>Описание</div>
            <div class="cart-modal-header-quantity">Количество</div>
            <div class="cart-modal-header-price">Цена</div>
         </div>
         <div class="noitems">Ваша корзина пуста</div>
         <div class="cart-modal-items">
         </div>
         <div class="cart-modal-sum checkout"></div>
         <button class="btn cart-modal-button checkout">Оформить заказ</button>
      </div>
      </div>
      `;
      this.BODY_MAIN.insertAdjacentHTML("afterbegin", cart);
      this.publisher.notify('ON_RENDER_CART');
   }

   isCartEmpty = (goods) => {
      if (goods.length > 0) {
         document.body.querySelector(".noitems").style.display = 'none';
         [...document.body.querySelectorAll(".checkout")].forEach(el => el.style.visibility = 'visible');
      }
      else {
         document.body.querySelector(".noitems").style.display = 'block';
         [...document.body.querySelectorAll(".checkout")].forEach(el => el.style.visibility = 'hidden');
      }
   }

   renderGoods = (goods) => {
      document.body.querySelector(".cart-modal-items").innerHTML = '';
      document.body.querySelector(".cart-modal-sum").innerHTML = '';
      let sum = 0;
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
            <div class="cart-modal-quantity">
               <button class="cart-modal-minus cart-modal-add"></button>
               ${quantity}
               <button class="cart-modal-plus cart-modal-add"></button>
            </div>
            <div class="cart-modal-price">${price}₴</div>
         </div>`
         document.body.querySelector(".cart-modal-items").insertAdjacentHTML("afterbegin", good);
         sum += quantity * price;
      }
      document.body.querySelector(".cart-modal-sum").insertAdjacentHTML("afterbegin", `Общая сумма: <span class="cart-modal-price">${sum}₴</span>`)
   }
}
