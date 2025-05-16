import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddproductComponent} from './addproduct/addproduct.component'
import { FormsModule, NgForm } from '@angular/forms';
import { EditproductComponent } from './editproduct/editproduct.component';
import { HeroComponent } from './home/hero/hero.component';
import { FeaturedProductsComponent } from './home/featured-products/featured-products.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { WhyChooseUsComponent } from './home/why-choose-us/why-choose-us.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddproductComponent,
    EditproductComponent,
    HeroComponent,
    FeaturedProductsComponent,
    CategoriesComponent,
    WhyChooseUsComponent,
    TestimonialsComponent,
    CartComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
