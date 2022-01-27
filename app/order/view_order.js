export default class ViewOrder {
   BODY_MAIN = document.body.querySelector("main");
   constructor(handleFormClick) {
      this.handleFormClick = handleFormClick;
   }

   addClickListener() {
      document.querySelector('.cart-modal-button').addEventListener('click', this.handleFormClick);
   }

   addInputListener = () => {
      [...document.querySelectorAll('.form-modal-input')].forEach(input => input.addEventListener('input', this.changeInputStyle));
   }

   changeInputStyle = (event) => {
      event.target.classList.remove('invalid');
      if (event.target.value.length === 0) {
         event.target.classList.add('invalid');
      }
   }

   renderForm = () => {
      const form = `
      <div class="backdrop show-modal cool">
         <div class="form-modal">
            <span class="close form"></span>
            <div class="form-modal-body">
               <div class="form-modal-title">Введите ваши данные</div>
               <div><input type="text" class="form-modal-input form-modal-name" maxlength="50" placeholder="Имя"></div>
               <div><input type="email" class="form-modal-input form-modal-email" maxlength="50" placeholder="E-mail"></div>
               <div><input type="tel" class="form-modal-input form-modal-phone" maxlength="13" placeholder="+380ХХХХХХХХХ"></div>
               <button class="btn form-modal-button">Отправить заказ</button>
            </div>
         </div>
      </div>
      `;
      this.BODY_MAIN.insertAdjacentHTML("afterbegin", form);
   }

   addCloseModalListeners = () => {
      const backdrop = document.querySelector(".backdrop");
      document.querySelector(".close.form").addEventListener("click", this.closeModal);
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