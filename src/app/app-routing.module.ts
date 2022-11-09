import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//main routes
import { AboutComponent } from './about/about.component';
import { AdminComponent} from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllproductsComponent } from './allproducts/allproducts.component';

//Admin routings
import { AdminAboutComponent } from './adminpanel/admin-about/admin-about.component';
import { AdminCartComponent } from './adminpanel/admin-cart/admin-cart.component';
import { AdminContactComponent } from './adminpanel/admin-contact/admin-contact.component';
import { AdminControlComponent } from './adminpanel/admin-control/admin-control.component';
import { AdminHomeComponent } from './adminpanel/admin-home/admin-home.component';
import { AdminLoginComponent } from './adminpanel/admin-login/admin-login.component';
import { AdminProductsComponent } from './adminpanel/admin-products/admin-products.component';
import { AdminRegisterComponent } from './adminpanel/admin-register/admin-register.component';
import { ProductsComponent } from './products/products.component';
import { PersonalInfoComponent } from './profile/personal-info/personal-info.component';
import { WatchListComponent } from './profile/watch-list/watch-list.component';
import { YourEventComponent } from './profile/your-event/your-event.component';
import { OrderListComponent } from './profile/order-list/order-list.component';
import { AlertListComponent } from './profile/alert-list/alert-list.component';

const routes: Routes = [
  //main Routes

  {path:"about", component:AboutComponent},
  {path:"products", component:ProductsComponent},
  {path:"profile", component:ProfileComponent,
  children:[
    {path:"personalinfo/:id",component:PersonalInfoComponent},
    {path:"watchlist/:id",component:WatchListComponent},
    {path:"yourevent/:id",component:YourEventComponent},
    {path:"orderlist/:id",component:OrderListComponent},
    {path:"alertlist/:id",component:AlertListComponent},
    {path:"**",component:PersonalInfoComponent}
  ]},
  {path:"cart", component:CartComponent},
  {path:"admin", component:AdminComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"allproducts", component:AllproductsComponent},

  //Admin Routes
  {path:"admin-about", component:AdminAboutComponent},
  {path:"admin-cart", component:AdminCartComponent},
  {path:"admin-contact", component:AdminContactComponent},
  {path:"admin-control", component:AdminControlComponent},
  {path:"admin-home", component: AdminHomeComponent},
  {path:"admin-login", component: AdminLoginComponent},
  {path:"admin-products", component: AdminProductsComponent},
  {path:"admin-register", component:  AdminRegisterComponent},
  {path:"**", redirectTo:"home",pathMatch:'full'},//404 not found

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
