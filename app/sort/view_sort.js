export default class ViewSort {
   BODY_HEADER = document.body.querySelector("header");

   constructor(handleSortClick) {
      this.handleSortClick = handleSortClick;
   }

   init() {
      this.renderButtons();
      this.addListeners(this.handleSortClick);
   }

   addListeners(listener) {
      document.querySelector('.select-sort').addEventListener('change', listener);
   }

   renderButtons() {
      const buttonsStr = `
      <select class="select-sort">
         <option value="">Сортировать</option>
         <option value="price-dn" class="btn--sort">По убыванию цены</option>
         <option value="rating-dn" class="btn--sort">По убыванию рейтинга</option>
         <option value="price-up" class="btn--sort">По возрастанию цены</option>
         <option value="rating-up" class="btn--sort">По возрастанию рейтинга</option>
       </select>
      `;
      this.BODY_HEADER.insertAdjacentHTML("afterbegin", buttonsStr);
   }
}