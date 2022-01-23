export default class ViewSearch {
   BODY_HEADER = document.body.querySelector("header");
   constructor(onSearchClick) {
      this.onSearchClick = onSearchClick;
   }
   init() {
      this.getInputSearch();
      this.addInputListener(this.onSearchClick);
   }

   addInputListener(listener) {
      document
         .querySelector(".form-control")
         .addEventListener("input", listener);
   }

   getInputSearch() {
      const inputSearchArea = `
      <div class="input-group">
        <span class="input-group-text">Твоя книга</span>
        <input type="text" class="form-control" name="query" placeholder="Введите заголовок" aria-label="Search by name" aria-describedby="basic-addon1">
      </div>`;
      this.BODY_HEADER.insertAdjacentHTML("afterbegin", inputSearchArea);
   }
}
