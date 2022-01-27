export default class ModelCart {
   goods = [];
   ids = [];

   filterGoods = () => {
      this.goods = this.goods.filter(item => item.quantity > 0);
      return this.goods;
   }

   countSum = () => {
      let sum = 0;
      for (const { price, quantity } of this.goods) {
         sum += quantity * price;
      }
      return sum;
   }

   findAddedGoods = () => {
      let goods = [];
      for (const id of this.ids) {
         let i = 0;
         goods = goods.concat(this.data.filter(card => card.id === id));
         if (!goods[i].quantity) {
            goods[i].quantity = 0;
         }
         goods[i].quantity += 1;
         i++;
      }
      this.goods = Array.from(new Set(this.goods.concat(goods)));
      this.ids = [];
      return this.goods;
   }

   changeQuantity(event) {
      const item = event.target.closest('.cart-modal-item');
      const id = item.dataset.id;
      const itemObj = this.goods.find(item => item.id === id);
      if (event.target.classList.contains('cart-modal-plus')) {
         itemObj.quantity += 1;
      }
      if (event.target.classList.contains('cart-modal-minus')) {
         itemObj.quantity -= 1;
      }
      return this.goods;
   }
}