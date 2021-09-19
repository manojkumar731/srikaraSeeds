import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "@src/app/app-routing.module";
import { AppComponent } from "@src/app/app.component";
import { HomeComponent } from "@src/app/home/home.component";
import { AddCartComponent } from '@src/app/add-cart/add-cart.component';
import { ProductComponent } from '@src/app/product/product.component';
import { HeaderComponent } from '@src/app/shared/header/header.component';
import { OrderPageComponent } from '@src/app/order-page/order-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailsComponent } from '@src/app/product-details/product-details.component';
import { AdminUserlistComponent } from '@src/app/admin-userlist/admin-userlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    HeaderComponent,
    AddCartComponent,
    OrderPageComponent,
    LoginComponent,
    CheckOutComponent,
    ProductDetailsComponent,
    AdminUserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
