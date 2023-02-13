export default class ItemView {
  constructor(listing_id, url, MainImag, title, currency_code, price, quantity) {
    this.listing_id = listing_id
    this.url = url;
    this.MainImag = MainImag;
    this.title = title;
    this.currency_code = currency_code;
    this.price = price;
    this.quantity = quantity;
  }
}
