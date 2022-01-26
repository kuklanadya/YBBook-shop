import Publisher from "../publisher.js";
import ModelHistory from "./model_history.js";
import ViewHistory from "./view_history.js";

export default class ControllerHistory {
   constructor() {
      this.publisher = new Publisher();
      this.view = new ViewHistory(this.publisher);
      this.model = new ModelHistory();

      this.view.init();
      this.publisher.subscribe('ON_RENDER_HISTORY', this.handleRenderOrders);
   }

   handleRenderOrders = () => {
      this.model.getDataFromStorage();
      this.view.isHistoryEmpty(this.model.goods);
      this.view.renderOrders(this.model.goods);
   }
}