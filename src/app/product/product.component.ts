import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  constructor() { }

  addToCartProducts = [];

  ngOnInit(): void {
    this.addToCartProducts = localStorage?.getItem('products') ? JSON.parse(localStorage?.getItem('products')) : [];
  }

  addToCart(prductName) {
    if (prductName && !(this.addToCartProducts?.includes(prductName))) {
      this.addToCartProducts.push(prductName)
      localStorage.setItem('products', JSON.stringify(this.addToCartProducts))
    }
  }
}
