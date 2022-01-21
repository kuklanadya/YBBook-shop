import Publisher from "../publisher.js";
import ViewModal from "./view_modal.js";

export default class ControllerModal {
   constructor() {
      this.view = new ViewModal(this.handleCardClick);

      this.publisher = new Publisher();
      this.publisher.subscribe('ON_RENDER_CARDS', this.onRenderCards);
   }

   handleCardClick = (event) => {
      const modalCard = event.target.closest(".card");
      const modalCardId = modalCard.dataset.id;
      this.publisher.notify('ON_CARD_CLICK', modalCardId);
   }

   onRenderCards = () => {
      this.view.init();
   }
}