import Publisher from "../publisher.js";
import ViewOrder from "./view_order.js";

export default class ControllerOrder {
   constructor() {
      this.publisher = new Publisher();
      this.view = new ViewOrder(this.handleFormClick);

      this.publisher.subscribe('ON_RENDER_CART', this.onRenderCart);
      this.publisher.subscribe('ON_RENDER_FORM', this.onRenderForm);
   }

   onRenderForm = () => {
      this.view.addInputListener();
      this.view.addCloseModalListeners();
   }

   onRenderCart = () => {
      this.view.addClickListener();
   }

   handleFormClick = () => {
      this.view.renderForm();
      this.publisher.notify('ON_RENDER_FORM');
   }
}
