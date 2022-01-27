import Publisher from "../publisher.js";
import ModelCart from "./model_cart.js";
import ViewCart from "./view_cart.js";

export default class ControllerCart {
   constructor() {
      this.publisher = new Publisher();
      this.view = new ViewCart(this.handleCartClick);
      this.model = new ModelCart();

      this.publisher.subscribe('ON_RENDER_CARDS', this.getData);
      this.publisher.subscribe('ON_RENDER_MODAL', this.onRenderModal);
      this.publisher.subscribe('ON_RENDER_CART', this.handleRenderGoods);
      this.publisher.subscribe('ON_CHANGE_GOODS', this.handleRenderGoods);
   }

   onRenderModal = () => {
      this.view.addToCartListener(this.handleAddToCart);
   }

   getData = (data) => {
      this.model.data = data;
   }

   handleRenderGoods = () => {
      const goods = this.model.filterGoods();
      const sum = this.model.countSum();
      this.view.isCartEmpty(goods);
      this.view.renderGoods(goods, sum);
      this.view.addChangeQuantityListener(this.handleChangeQuantity);
   }

   handleCartClick = () => {
      this.view.renderCart();
      this.view.addCloseModalListeners();
      this.publisher.notify('ON_RENDER_CART');
   }

   handleChangeQuantity = (event) => {
      const goods = this.model.changeQuantity(event);
      this.publisher.notify('ON_CHANGE_GOODS', goods);
   }

   handleAddToCart = (event) => {
      event.preventDefault();
      const id = event.target.closest('.card').dataset.id;
      this.model.ids.push(id);
      this.model.findAddedGoods();
   }
} 