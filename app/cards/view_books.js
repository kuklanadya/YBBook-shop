export default class ViewBooks {
  BODY_MAIN = document.body.querySelector("main");
  renderBooks(books) {
    this.BODY_MAIN.insertAdjacentHTML(
      "beforeend",
      books.map(this.getBookHTML).join("")
    );
  }

  getBookHTML({ name, author, price, description, pages, year, rate, image }) {
    return `<div class="card">
        <div class="card m-2" style="width: 18rem">
          <img src="${image}" class="card-img-top" alt="${name}" />
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <!--book name -->
            <p class="card-text">Author: ${author}</p>
            <p class="card-text">Description: ${description}</p>
            <p class="card-text">Year: ${year}</p>
            <p class="card-text">Pages: ${pages}</p>
            <p class="card-text">Rate: ${rate}</p>
            <p class="card-text">Price: ${price}</p>
            <a href="#" class="btn btn-primary">Buy</a>
          </div>
        </div>
      </div>`;
  }
}
