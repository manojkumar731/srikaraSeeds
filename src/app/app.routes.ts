import { Routes } from "@angular/router";
import { AddCartComponent } from "./add-cart/add-cart.component";
import { AdminUserlistComponent } from "./admin-userlist/admin-userlist.component";
import { CheckOutComponent } from "./check-out/check-out.component";

import { LoginComponent } from "./login/login.component";
import { OrderPageComponent } from "./order-page/order-page.component";
import { ProductDescripitionComponent } from "./product-descripition/product-descripition.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductComponent } from "./product/product.component";

export const routes: Routes = [
  { path: "", redirectTo: "product", pathMatch: "full" },
  { path: "product", component: ProductComponent },
  // { path: "productDetail", component: ProductDescripitionComponent },
  { path: "login", component: LoginComponent },
  { path: "addCart", component: AddCartComponent },
  { path: "checkout", component: CheckOutComponent },
  { path: "purchaseOrder", component: OrderPageComponent },
  { path: "inventoryView", component: ProductDetailsComponent },
  { path: "userList", component: AdminUserlistComponent },
];
