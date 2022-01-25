export default class ModelInfo {
   TG_BASE_URL = 'https://api.telegram.org/bot5246638907:AAEORSmJTXhY1q1Nxwmz41k5qqgxiFyLBn4/sendMessage?';
   CHAT_ID = 663180905;

   goods = [];

   sendMsg = text => {
      const url = `${this.TG_BASE_URL}chat_id=${this.CHAT_ID}&text=${text}\n Спасибо за Ваш заказ! `;
      //fetch(url);
   }

   //updateCart = id => {
      // if (!this.goods[id]) {
      //    this.goods[id] = 0;
      // }
      // this.goods[id] += 1;
      // this.goods[sum] += 1;
   //}

   sendInfo = _ => {
      const message = JSON.stringify(this.goods);
      this.sendMsg(message);
   }
}