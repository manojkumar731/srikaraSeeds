import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { routes } from "@src/app/app.routes";
import { ProductComponent } from "./product/product.component";

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

const router: Routes = [
  { path: "", redirectTo: "product", pathMatch: "full" },
  { path: "shopping", component: ProductComponent },
];
