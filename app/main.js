import ControllerBooks from "./cards/controller_books.js";

const controllerBooks = new ControllerBooks();
const URL_SHEET = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQirlHBLU299aaZ7rqDdrC48Cb50Tb-8s_YK7-XIIpoFAS9uy9pnDki0uuxehglgHYLID9xt7q4wWRg/pub?output=tsv";
const BODY_MAIN = document.body.querySelector("main"); //V

fetch(URL_SHEET) //M
   .then((r) => r.text())
   .then((d) => {
      console.log(d);
      parseSheet(d);
   });

const parseSheet = (tsv) => {
   //M
   const d = tsv.split("\r\n").map((line) => line.split("\t"));
   const keys = d.shift();
   const data = d.map((arr) =>
      arr.reduce((obj, prop, i) => {
         obj[keys[i]] = prop;
         return obj;
      }, {})
   );
};

const renderBooks = (books) => {
   //V
   BODY_MAIN.insertAdjacentHTML("beforeend", books.map(getBookHTML).join(""));
};

const getBookHTML = ({
   //V
   name,
   author,
   price,
   description,
   pages,
   year,
   rate,
   image,
}) => {
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
};
