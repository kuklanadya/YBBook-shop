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

   sendInfo = (goods) => {
      this.goods = goods;
      let text = '';
      for (const item of goods) {
         text += `"${item.title}. ${item.author}" в количестве ${item.quantity},%0A`;
      }
      text = text.slice(0, -4) + '.';
      this.sendMsg(text);
   }

   validateInput = () => {
      let result = true;
      const name_reg = /([\u0401\u0451\u0410-\u044fa-z]+ ?)+/gi;
      const phone_reg = /\+380(\d{2})[-\. ]?(\d{3})[-\. ]?(\d{2})[-\. ]?(\d{2})[-\. ]?/g;
      const email_reg = /([a-z0-9]+\.?[a-z0-9]+)+@[a-z]+\.[a-z0-9]+/gi;
      if (!document.querySelector('.form-modal-name').value.match(name_reg)) {
         document.querySelector('.form-modal-name').classList.add('invalid');
         result = false;
      }
      if (!document.querySelector('.form-modal-phone').value.match(phone_reg)) {
         document.querySelector('.form-modal-phone').classList.add('invalid');
         result = false;
      }
      if (!document.querySelector('.form-modal-email').value.match(email_reg)) {
         document.querySelector('.form-modal-email').classList.add('invalid');
         result = false;
      }
      return result;
   }
}
