import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { routes } from "@src/app/app.routes";
import { AddCartComponent } from "./add-cart/add-cart.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { LoginComponent } from "./login/login.component";
import { OrderPageComponent } from "./order-page/order-page.component";
import { ProductDescripitionComponent } from "./product-descripition/product-descripition.component";
import { ProductComponent } from "./product/product.component";

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

const router: Routes = [
  { path: "", redirectTo: "product", pathMatch: "full" },
  { path: "product", component: ProductComponent },
  // { path: "productDetail", component: ProductDescripitionComponent },
  { path: "login", component: LoginComponent },
  { path: "addCart", component: AddCartComponent },
  { path: "checkout", component: CheckOutComponent },
  { path: "purchaseOrder", component: OrderPageComponent },
];
