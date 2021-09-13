import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppComponent } from "../app.component";
import { AppRoutingModule } from "../app-routing.module.tns";

@Component({
  selector: "app-check-out",
  templateUrl: "./check-out.component.html",
  styleUrls: ["./check-out.component.css"],
})
export class CheckOutComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  navigateToLogin() {
    this.router.navigate(["/login"]);
  }
}
