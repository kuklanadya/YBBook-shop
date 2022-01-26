import Publisher from "../publisher.js";
import ModelCards from "./model_cards.js";
import ViewCards from "./view_cards.js";

export default class ControllerCards {
   ids = [];
   constructor() {
      this.model = new ModelCards();
      this.view = new ViewCards(this.handleAddToCart, this.handleChangeQuantity);

      this.init();

      this.publisher = new Publisher();
      this.publisher.subscribe("ON_CLICK_SORT", this.handleSort);
      this.publisher.subscribe("ON_CLICK_FILTER", this.handleFilter);
      this.publisher.subscribe("ON_CARD_CLICK", this.handleModal);
      this.publisher.subscribe("ON_SEARCH", this.handleSearch);
      this.publisher.subscribe("ADD_TO_CART", this.getGoods);
      this.publisher.subscribe('ON_RENDER_CART', this.view.addCloseModalListeners);
      this.publisher.subscribe('ON_RENDER_FORM', this.view.addCloseModalListeners);
      this.publisher.subscribe('ON_RENDER_HISTORY', this.view.addCloseModalListeners);
      this.publisher.subscribe('ON_RENDER_GOODS', this.view.addChangeQuantityListener);
   }

   init() {
      this.view.renderHeader();
      this.model.getData().then((data) => {
         this.view.renderCards(data);
         this.view.addGenresAccordion();
         this.publisher.notify("ON_RENDER_CARDS");
      });
   }

   handleSort = ([sortType, i]) => {
      const data = this.model.sortData([sortType, i]);
      this.view.renderCards(data);
      this.publisher.notify("ON_RENDER_CARDS");
   };

   handleFilter = (filterType) => {
      const data = this.model.filterData(filterType);
      this.view.renderCards(data);
      this.publisher.notify("ON_RENDER_CARDS");
   };

   handleModal = (modalCardId) => {
      const modalCardObj = this.model.findModalCard(modalCardId);
      this.view.renderModalCard(modalCardObj);
      this.publisher.notify("ON_RENDER_MODAL");
      this.view.addToCartListener();
      this.view.addCloseModalListeners();
   };

   handleSearch = (searchQuery) => {
      const data = this.model.getBooksByQuery(searchQuery);
      this.view.renderCards(data);
      this.publisher.notify("ON_RENDER_CARDS");
   };

   handleAddToCart = (event) => {
      event.preventDefault();
      const id = event.target.closest('.card').dataset.id;
      this.ids.push(id);
      this.publisher.notify("ADD_TO_CART");
   }

   getGoods = () => {
      const ids = this.ids;
      const goods = this.model.findGoods(ids);
      this.ids = [];
      this.publisher.notify('FIND_GOODS', goods);
   }

   handleChangeQuantity = (event) => {
      const goods = this.model.changeQuantity(event);
      this.publisher.notify('CHANGE_GOODS', goods);
   }
}
