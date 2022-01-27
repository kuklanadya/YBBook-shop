import Publisher from "../publisher.js";
import ModelModal from "./model_modal.js";
import ViewModal from "./view_modal.js";

export default class ControllerModal {
   constructor() {
      this.view = new ViewModal(this.handleCardClick);
      this.model = new ModelModal();

      this.publisher = new Publisher();
      this.publisher.subscribe('ON_RENDER_CARDS', this.onRenderCards);
   }

   handleCardClick = (event) => {
      const modalCard = event.target.closest(".card");
      const modalCardId = modalCard.dataset.id;
      this.handleModal(modalCardId);
   }

   onRenderCards = (data) => {
      this.model.data = data;
      this.view.addListeners(this.handleCardClick);
   }

   handleModal = (modalCardId) => {
      const modalCardObj = this.model.findModalCard(modalCardId);
      this.view.renderModalCard(modalCardObj);
      this.view.addCloseModalListeners();
      this.publisher.notify("ON_RENDER_MODAL");
   };
}