export default class ModelCart {
   goods = [];

   filterGoods = () => {
      this.goods = this.goods.filter(item => item.quantity > 0);
   }

   getGoods = (item) => {
      this.goods = Array.from(new Set(this.goods.concat(item)));
   }
}
