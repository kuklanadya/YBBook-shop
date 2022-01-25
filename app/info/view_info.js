export default class ViewInfo {
   BODY_MAIN = document.body.querySelector("main");
   constructor(sendOrderInfo) {
      this.sendOrderInfo = sendOrderInfo;
   }

   init() {
      this.addListener(this.sendOrderInfo)
   }

   addListener = (listener) => {
      document.querySelector('.cart-modal-button').addEventListener('click', listener);
   }
}