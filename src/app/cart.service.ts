import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items: Object[] = [];
  shipping_prices = [
    {
      "type": "Overnight",
      "price": 25.99
    },
    {
      "type": "2-Day",
      "price": 9.99
    },
    {
      "type": "Postal",
      "price": 2.99
    }
  ];

  constructor(private http: HttpClient) {}

  addToCart(selected_product) {
    this.items.push(selected_product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    // return this.http.get("../assets/shipping.json");
    return this.shipping_prices
  }
}
