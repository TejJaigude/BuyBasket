import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {
    path:'products',component:ProductsComponent
  },
  {
    path:'addproduct',component:AddproductComponent
  },
  {
    path:'editproduct/:id',component:EditproductComponent
  },
  { 
    path: '',component:HomeComponent 
  },

  { 
    path: 'cart', component: CartComponent 
  },

  { 
    path: '', redirectTo: 'home', pathMatch: 'full' 
  },

  { 
    path: 'login', component: LoginComponent 
  },

  { 
    path: 'register', component: RegisterComponent 
  },

  { 
    path: 'home', component: HomeComponent, canActivate: [AuthGuard] 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
