import ModelBooks from "./model_books";
import ViewBooks from "./view_books";

export default class ControllerBooks {
  constructor() {
    this.modal = new ModelBooks();
    this.view = new ViewBooks();
    this.init();
  }
  init() {
    this.model.getData().then((d) => this.view.renderBooks(d));
  }
}
