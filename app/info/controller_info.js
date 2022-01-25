import Publisher from "../publisher.js";
import ModelInfo from "./model_info.js";
import ViewInfo from "./view_info.js";

export default class ControllerInfo {
   constructor() {
      this.model = new ModelInfo();
      this.view = new ViewInfo(this.sendOrderInfo);

      this.publisher = new Publisher();
      this.publisher.subscribe('ON_RENDER_CART', this.onRenderCart);
      this.publisher.subscribe('SEND_ORDER', this.sendOrderInfo);
   }

   handleAddToCard = id => {
      //this.model.updateCart(id);
   }

   sendOrderInfo = () => {
      this.model.sendInfo();
   }

   onRenderCart = () => {
      this.view.init();
   }
}
