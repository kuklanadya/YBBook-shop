export default class ModelModal {
   data = [];

   findModalCard(modalCardId) {
      const modalCardObj = this.data.find((card) => card.id === modalCardId);
      return modalCardObj;
   }
}