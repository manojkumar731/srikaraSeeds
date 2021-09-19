import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-cart",
  templateUrl: "./add-cart.component.html",
  styleUrls: ["./add-cart.component.css"],
})
export class AddCartComponent implements OnInit {
  // @ViewChild('myname') input; 
  finalAmmount: any;
  constructor(public router: Router) { }
  addToCartProducts = [];

  ngOnInit(): void {
    this.addToCartProducts = localStorage?.getItem('products') ? JSON.parse(localStorage?.getItem('products')) : [];
  }

  async ngAfterViewInit() {
    await this.totalAmount();
  }

  checkout() {
    let isLoggenIn = localStorage.getItem('token')
    if (isLoggenIn)
      this.router.navigate(["/checkout"]);
    else
      this.router.navigate(["/login"]);
  }

  async removeProduct(prdct) {
    const index = this.addToCartProducts?.indexOf(prdct);
    if (index > -1) {
      this.addToCartProducts?.splice(index, 1);
      localStorage.setItem('products', JSON.stringify(this.addToCartProducts))
    }
  }

  increment(i) {
    let incrementValue = parseInt(document.getElementById('priceNumber' + i).innerText)
    incrementValue++
    document.getElementById('priceNumber' + i).innerText = incrementValue.toString()
    document.getElementById('totalAmnt' + i).innerText = (incrementValue * 100).toString();
    this.totalAmount();
  }

  decrement(i) {
    let decrementValue = parseInt(document.getElementById('priceNumber' + i).innerText)
    if (decrementValue > 1)
      decrementValue--
    document.getElementById('priceNumber' + i).innerText = decrementValue.toString();
    document.getElementById('totalAmnt' + i).innerText = (decrementValue * 100).toString();
    this.totalAmount();
  }

  async totalAmount() {
    let totalValue = document.getElementsByClassName('totalAmnt');
    let finalAmnt = []
    await Array.prototype.forEach.call(totalValue, function (el) {
      finalAmnt.push(parseInt(el.innerText))
    });
    this.finalAmmount = finalAmnt.reduce((a, b) => a + b, 0)
  }


}
