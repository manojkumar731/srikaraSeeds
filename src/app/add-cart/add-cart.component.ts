import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-cart",
  templateUrl: "./add-cart.component.html",
  styleUrls: ["./add-cart.component.css"],
})
export class AddCartComponent implements OnInit {
  constructor(public router: Router) {}
  addToCartProducts = [];

  ngOnInit(): void {
    this.addToCartProducts = localStorage?.getItem('products') ? JSON.parse(localStorage?.getItem('products')) : [];
  }

  checkout() {
    this.router.navigate(["/checkout"]);
  }
}
