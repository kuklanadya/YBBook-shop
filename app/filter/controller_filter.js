import Publisher from "../publisher.js";
import ViewFilter from "./view_filter.js";

export default class ControllerFilter {
   constructor(handleFilterByControllerCards) {
      this.view = new ViewFilter(this.handleFilterClick);
      this.handleFilterByControllerCards = handleFilterByControllerCards;

      this.view.init();
      this.publisher = new Publisher();
   }

   handleFilterClick = (event) => {
      let filterType = [];
      let formCheckDivs = [...event.target.closest('.genres').children].slice(0, -1);
      formCheckDivs.forEach(div => {
         if (div.firstElementChild.checked) {
            filterType.push(div.firstElementChild.value)
         }
      });
      this.publisher.notify('ON_CLICK_FILTER', filterType);
   }
}
