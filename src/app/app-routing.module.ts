import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//main routes
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllproductsComponent } from './allproducts/allproducts.component';

//Admin routings
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';
import { AdminCartComponent } from './admin/admin-cart/admin-cart.component';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { AdminControlComponent } from './admin/admin-control/admin-control.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  //main Routes

  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'allproducts', component: AllproductsComponent },

  //Admin Routes
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'admin-about', component: AdminAboutComponent },
      { path: 'admin-cart', component: AdminCartComponent },
      { path: 'admin-contact', component: AdminContactComponent },
      { path: 'admin-control', component: AdminControlComponent },
      { path: 'admin-home', component: AdminHomeComponent },
      { path: 'admin-login', component: AdminLoginComponent },
      { path: 'admin-products', component: AdminProductsComponent },
      { path: 'admin-register', component: AdminRegisterComponent },
    ],
  },

  { path: '**', redirectTo: 'products', pathMatch: 'full' }, //404 not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
