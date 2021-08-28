import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { routes } from "@src/app/app.routes";
import { ProductComponent } from "./product/product.component";

/* const router: Routes = [
  { path: "", redirectTo: "product", pathMatch: "full" },
  { path: "product", component: ProductComponent },
];
 */
@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
