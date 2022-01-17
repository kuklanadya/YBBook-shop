export default class ModelBooks {
  URL_SHEET = "google url";

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
