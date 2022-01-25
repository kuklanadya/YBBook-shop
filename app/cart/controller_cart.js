import Publisher from "../publisher.js";
import ViewCart from "./view_cart.js";

export default class ControllerCart {
   goods = [];
   constructor() {
      this.publisher = new Publisher();
      this.view = new ViewCart(this.publisher);

      this.view.init();
      this.publisher.subscribe('FIND_GOODS', this.getGoods);
      this.publisher.subscribe('ON_RENDER_CART', this.renderGoods);
      this.publisher.subscribe('CHANGE_GOODS', this.renderGoods);
   }

   getGoods = (item) => {
      this.goods = Array.from(new Set(this.goods.concat(item)));
   }

   renderGoods = () => {
      this.goods = this.goods.filter(item => item.quantity > 0)
      this.view.isCartEmpty(this.goods);
      this.view.renderGoods(this.goods);
      this.publisher.notify("ON_RENDER_GOODS");
   }
}