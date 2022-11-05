import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { AdminHomeComponent } from './adminpanel/admin-home/admin-home.component';
import { AdminCartComponent } from './adminpanel/admin-cart/admin-cart.component';
import { AdminAboutComponent } from './adminpanel/admin-about/admin-about.component';
import { AdminContactComponent } from './adminpanel/admin-contact/admin-contact.component';
import { AdminProductsComponent } from './adminpanel/admin-products/admin-products.component';
import { AdminRegisterComponent } from './adminpanel/admin-register/admin-register.component';
import { AdminLoginComponent } from './adminpanel/admin-login/admin-login.component';
import { AdminControlComponent } from './adminpanel/admin-control/admin-control.component';
import { ProfileComponent } from './profile/profile.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ProjectService } from './services/project.service';
import { UsersComponent } from './routing/users/users.component';
import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    AdminHomeComponent,
    AdminCartComponent,
    AdminAboutComponent,
    AdminContactComponent,
    AdminProductsComponent,
    AdminRegisterComponent,
    AdminLoginComponent,
    AdminControlComponent,
    ProfileComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    ProjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
