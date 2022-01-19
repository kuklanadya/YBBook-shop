import Publisher from "../publisher.js";
import ViewSort from "./view_sort.js";

export default class ControllerSort {
   constructor(handleSortByControllerCards) {
      this.view = new ViewSort(this.handleClickBtnSort);
      this.handleSortByControllerCards = handleSortByControllerCards;

      this.view.init();

      this.publisher = new Publisher();
   }

   handleClickBtnSort = event => {
      const params = [...event.target.children].slice(1).map(el => el.value);
      const sortType = event.target.value;
      const i = params.findIndex(el => el === sortType)
      this.publisher.notify('ON_CLICK_SORT', [sortType, i])
   }
}
