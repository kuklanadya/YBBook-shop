export default class ModelCards {
   URL_SHEET =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQirlHBLU299aaZ7rqDdrC48Cb50Tb-8s_YK7-XIIpoFAS9uy9pnDki0uuxehglgHYLID9xt7q4wWRg/pub?output=tsv";
   goods = [];

   getData() {
      return fetch(this.URL_SHEET)
         .then((response) => response.text())
         .then((data) => this.parseSheet(data));
   }

   parseSheet = (tsv) => {
      const d = tsv.split("\r\n").map((line) => line.split("\t"));
      const keys = d.shift();
      const data = d.map((arr) =>
         arr.reduce((obj, prop, i) => {
            obj[keys[i]] = prop;
            return obj;
         }, {})
      );
      this.DATA = data;
      this.data = data;
      return data;
   };

   sortData([sortType, i]) {
      const sortVoc = {
         "price-up": 1,
         "price-dn": -1,
         "rating-up": 1,
         "rating-dn": -1,
      };
      let param = i % 2 === 0 ? "price" : "rating";
      this.data.sort((a, b) => (a[param] - b[param]) * sortVoc[sortType]);
      return this.data;
   }

   filterData(filterType) {
      this.data = [];
      for (const type of filterType) {
         let filtredSubarray = this.DATA.filter((d) => d.genre.includes(type));
         this.data = this.data.concat(filtredSubarray);
      }
      return this.data;
   }

   findModalCard(modalCardId) {
      const modalCardObj = this.data.find((card) => card.id === modalCardId);
      return modalCardObj;
   }

   getBooksByQuery(searchQuery) {
      const input = document.querySelector(".form-control");
      const getBooksByTitle = this.data.filter((s) =>
         s.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const getBooksByAuthor = this.data.filter((s) =>
         s.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
      let getBooks = [];
      getBooks = Array.from(new Set(getBooks.concat(getBooksByTitle).concat(getBooksByAuthor)));
      if (getBooks.length === 0) {
         alert("Книги с таким названием не найдено");
         input.value = "";
         return this.data;
      }
      return getBooks;
   }

   findGoods = (ids) => {
      let goods = [];
      for (const id of ids) {
         let i = 0;
         goods = goods.concat(this.data.filter(card => card.id === id));
         if (!goods[i].quantity) {
            goods[i].quantity = 0;
         }
         goods[i].quantity += 1;
         i++;
      }
      this.goods = Array.from(new Set(this.goods.concat(goods)));
      return goods;
   }

   changeQuantity(event) {
      const item = event.target.closest('.cart-modal-item');
      const id = item.dataset.id;
      const itemObj = this.goods.find(item => item.id === id);
      if (event.target.classList.contains('cart-modal-plus')) {
         itemObj.quantity += 1;
      }
      if (event.target.classList.contains('cart-modal-minus')) {
         itemObj.quantity -= 1;
      }
      return this.goods;
   }
}

