import Publisher from "../publisher.js";
import ViewSearch from "./view_search.js";

export default class ControllerSearch {
   constructor() {
      this.view = new ViewSearch(this.onSearch);
      this.view.init();
      this.publisher = new Publisher();
   }
   onSearch = (event) => {
      this.searchQuery = event.target.value;
      this.publisher.notify("ON_SEARCH", this.searchQuery);
   };
}
