export default class ModelInfo {
   TG_BASE_URL = 'https://api.telegram.org/bot5246638907:AAEORSmJTXhY1q1Nxwmz41k5qqgxiFyLBn4/sendMessage?';
   CHAT_ID = 663180905;
   goods = [];

   sendMsg = text => {
      const url = `${this.TG_BASE_URL}chat_id=${this.CHAT_ID}&text=
      Вы только что оформили заказ в интернет-магазине YBBooks.%0AСодержимое заказа:%0A ${text}
      %0AСпасибо за то, что выбрали нас! Наш оператор свяжется с вами в ближайшее время.`;
      fetch(url);
   }

   sendInfo = () => {
      let text = '';
      for (const item of this.goods) {
         text += `"${item.title}. ${item.author}" в количестве ${item.quantity},%0A`;
      }
      text = text.slice(0, -4) + '.';
      this.sendMsg(text);
   }

   validateInput = (inputs) => {
      const result = inputs.reduce((acc, { selector, reg }) => {
         const input = document.querySelector(selector);
         if (!input.value.match(reg)) {
            input.classList.add('invalid');
            return false;
         }
         return acc;
      }, true);
      return result;
   }

   putDataInStorage = () => {
      localStorage.setItem('order', JSON.stringify(this.goods));
   }
}
