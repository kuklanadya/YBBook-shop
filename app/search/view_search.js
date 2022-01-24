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
      <img src="/img/search.svg" alt="search">
      <input type="text" class="form-control" name="query" placeholder="Поиск" aria-label="Search by name">
      </div>`;
      this.BODY_HEADER.insertAdjacentHTML("beforeend", inputSearchArea);
   }
}
