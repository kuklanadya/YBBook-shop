export default class ViewModal {
   BODY_MAIN = document.body.querySelector("main");

   constructor(handleCardClick) {
      this.handleCardClick = handleCardClick;
   }

   init() {
      this.addListeners(this.handleCardClick);
   }

   addListeners(listener) {
      [...document.querySelectorAll(".card")]
         .forEach(card => card.addEventListener("click", listener))
   }
}