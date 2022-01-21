import Publisher from "../publisher.js";
import ViewModal from "./view_modal.js";

export default class ControllerModal {
   constructor() {
      this.view = new ViewModal(this.handleCardClick);

      this.view.init();
      this.publisher = new Publisher();
   }

   handleCardClick = (event) => {
      // if (event.target === event.currentTarget) {
      //    return;
      // }
      document.body.classList.add("show-modal");
      console.log(event.target);
      console.log(event.currentTarget);
      this.publisher.notify('ON_CARD_CLICK', event);
   }
}