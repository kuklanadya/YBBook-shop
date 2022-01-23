import Publisher from "../publisher.js";
import ViewSearch from "./view_search.js";

export default class ControllerSearch {
  constructor() {
    this.view = new ViewSearch(this.onSearch);
    this.view.init();
    this.publisher = new Publisher();
    this.searchQuery = "";
  }
  onSearch = (e, getBook) => {
    e.preventDefault();
    console.log(e.target.value);
    this.searchQuery = e.target.value;

    const searchedData = [];
    searchedData.push(getBook);

    this.publisher.notify("ON_SEARCH", this.searchQuery);
  };
}
