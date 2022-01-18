export default class ModelBooks {
   URL_SHEET = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQirlHBLU299aaZ7rqDdrC48Cb50Tb-8s_YK7-XIIpoFAS9uy9pnDki0uuxehglgHYLID9xt7q4wWRg/pub?output=tsv";

   getData() {
      return fetch(this.URL_SHEET)
         .then((r) => r.text())
         .then(this.parseSheet);
   }

   parseSheet(tsv) {
      const d = tsv.split("\r\n").map((line) => line.split("\t"));
      const keys = d.shift();
      const data = d.map((arr) =>
         arr.reduce((obj, prop, i) => {
            obj[keys[i]] = prop;
            return obj;
         }, {})
      );
      return data;
   }
}
