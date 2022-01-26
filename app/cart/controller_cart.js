import Publisher from "../publisher.js";
import ModelCart from "./model_cart.js";
import ViewCart from "./view_cart.js";

export default class ControllerCart {
   constructor() {
      this.publisher = new Publisher();
      this.view = new ViewCart(this.publisher);
      this.model = new ModelCart();

      this.view.init();
      this.publisher.subscribe('FIND_GOODS', this.model.getGoods);
      this.publisher.subscribe('ON_RENDER_CART', this.renderGoods);
      this.publisher.subscribe('CHANGE_GOODS', this.renderGoods);
   }

   renderGoods = () => {
      this.model.filterGoods();
      this.view.isCartEmpty(this.model.goods);
      this.view.renderGoods(this.model.goods);
      this.publisher.notify("ON_RENDER_GOODS", this.model.goods);
   }
}
