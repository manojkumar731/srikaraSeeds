import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "@src/app/app-routing.module";
import { AppComponent } from "@src/app/app.component";
import { HomeComponent } from "@src/app/home/home.component";
import { AddCartComponent } from '@src/app/add-cart/add-cart.component';
import { ProductComponent } from '@src/app/product/product.component';
import { HeaderComponent } from '@src/app/shared/header/header.component';
import { OrderPageComponent } from '@src/app/order-page/order-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    HeaderComponent,
    AddCartComponent,
    OrderPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
