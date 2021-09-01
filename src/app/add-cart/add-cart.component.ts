import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-cart",
  templateUrl: "./add-cart.component.html",
  styleUrls: ["./add-cart.component.css"],
})
export class AddCartComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  checkout() {
    this.router.navigate(["/checkout"]);
  }
}
