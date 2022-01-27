export default class ModelHistory {
   goods = [];

   getDataFromStorage() {
      this.goods = this.goods.concat(JSON.parse(localStorage.getItem('order') ?? 0));
      this.goods = this.goods.filter(el => el !== 0);
   }
}