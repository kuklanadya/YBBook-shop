export default class ViewFilter {
  BODY_HEADER = document.body.querySelector("header");

  constructor(handleFilterClick) {
    this.handleFilterClick = handleFilterClick;
  }

  init() {
    this.renderGenresFilter();
    this.addListeners(this.handleFilterClick);
  }

  addListeners(listener) {
    document
      .querySelector(".filter-genres")
      .addEventListener("click", listener);
  }

  renderGenresFilter() {
    const checkboxGenres = `
        <section class="accordion" >
          <div class="accordion_header"><h4>Жанры</h4></div>
          <div class="accordion_content">
          <div class="form-check">
            <input class="form-check-input genres" type="checkbox"
            value="роман" id="flexCheckDefault" data-btn='checkbox_genres'/>
            <label class="form-check-label" for="flexCheckDefault">Роман</label>
          </div>
          <div class="form-check">
            <input class="form-check-input"
              type="checkbox"
              value="сатира"
              id="flexCheckChecked"
              data-btn='checkbox_genres'/>
            <label class="form-check-label" for="flexCheckChecked">Сатира </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="притча"
              id="flexCheckChecked"
              data-btn='checkbox_genres'
            />
            <label class="form-check-label" for="flexCheckChecked">
              Притча
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="научная фантастика"
              id="flexCheckChecked"
              data-btn='checkbox_genres'
            />
            <label class="form-check-label" for="flexCheckChecked">
              Научная фантастика
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="драма"
              id="flexCheckChecked"
              data-btn='checkbox_genres'
            />
            <label class="form-check-label" for="flexCheckChecked">
              Драма
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="фэнтези"
              id="flexCheckChecked"
              data-btn='checkbox_genres'
            />
            <label class="form-check-label" for="flexCheckChecked">
              Фэнтези
            </label>
          </div>
          <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="повесть"
            id="flexCheckChecked"
            data-btn='checkbox_genres'

          />
          <label class="form-check-label" for="flexCheckChecked">
            Повесть
          </label>
        </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="сказка"
              id="flexCheckChecked"
              data-btn='checkbox_genres'

            />
            <label class="form-check-label" for="flexCheckChecked">
              Сказка
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="эссе"
              id="flexCheckChecked"
              data-btn='checkbox_genres'
            />
            <label class="form-check-label" for="flexCheckChecked">
              Эссе
            </label>
          </div>
          <button class="btn btn-primary filter-genres">Искать</button>
         </div>
        </section>
        `;
    this.BODY_HEADER.insertAdjacentHTML("beforeend", checkboxGenres);
  }
}
