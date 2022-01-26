import Publisher from "../publisher.js";
import ViewInfo from "./view_order.js";

export default class ControllerOrder {
   constructor() {
      this.publisher = new Publisher();
      this.view = new ViewInfo(this.publisher);

      this.publisher.subscribe('ON_RENDER_CART', this.onRenderCart);
      this.publisher.subscribe('ON_RENDER_FORM', this.onRenderForm);
   }

   onRenderForm = () => {
      this.view.addInputListener();
   }

   onRenderCart = () => {
      this.view.init();
   }
}
