import Publisher from "../publisher.js";
import ViewFilter from "./view_filter.js";

export default class ControllerFilter {
   constructor() {
      this.view = new ViewFilter(this.handleFilterClick);

      this.view.init();
      this.publisher = new Publisher();
   }

   handleFilterClick = (event) => {
      document.querySelector('.select-sort').value = '';
      let filterType = [];
      let formCheckDivs = [...event.target.closest('.genres').children].slice(1, -1);
      formCheckDivs.forEach(div => {
         if (div.firstElementChild.checked) {
            filterType.push(div.firstElementChild.value)
         }
      });
      this.publisher.notify('ON_CLICK_FILTER', filterType);
   }
} 
