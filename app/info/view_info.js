export default class ViewInfo {
   BODY_MAIN = document.body.querySelector("main");
   inputs = [
      {
         selector: '.form-modal-name',
         reg: /([\u0401\u0451\u0410-\u044fa-z]+ ?)+/gi,
      },
      {
         selector: '.form-modal-phone',
         reg: /\+380(\d{2})[-\. ]?(\d{3})[-\. ]?(\d{2})[-\. ]?(\d{2})/g,
      },
      {
         selector: '.form-modal-email',
         reg: /([a-z0-9]+\.?)+[a-z0-9]+@[a-z]+\.[a-z0-9]+/gi,
      }
   ]

   constructor(sendOrderInfo) {
      this.sendOrderInfo = sendOrderInfo;
   }

   init() {
      this.addListener(this.sendOrderInfo)
   }

   addListener = (listener) => {
      document.querySelector('.form-modal-button').addEventListener('click', listener);
   }
}