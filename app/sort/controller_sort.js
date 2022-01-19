import ViewSort from "./view_sort.js";

export default class ControllerSort {
   constructor(handleSortByControllerCards) {
      this.view = new ViewSort(this.handleClickBtnSort.bind(this));
      this.handleSortByControllerCards = handleSortByControllerCards;

      this.view.init();
   }

   handleClickBtnSort(event) {
      const params = [...event.target.children].slice(1).map(el => el.value);
      const sortType = event.target.value;
      const i = params.findIndex(el => el === sortType)
      this.handleSortByControllerCards(sortType, i);
   }
}