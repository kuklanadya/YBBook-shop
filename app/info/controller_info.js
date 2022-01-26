import Publisher from "../publisher.js";
import ModelInfo from "./model_info.js";
import ViewInfo from "./view_info.js";

export default class ControllerInfo {
   constructor() {
      this.model = new ModelInfo();
      this.view = new ViewInfo(this.sendOrderInfo);

      this.publisher = new Publisher();
      this.publisher.subscribe('ON_RENDER_FORM', this.onRenderForm);
      this.publisher.subscribe('ON_RENDER_GOODS', this.getGoods);
   }

   sendOrderInfo = () => {
      if (this.model.validateInput(this.view.inputs) === true) {
         this.model.sendInfo();
      }
   }

   getGoods = (goods) => {
      this.model.goods = goods;
   }

   onRenderForm = () => {
      this.view.init();
   }
}
