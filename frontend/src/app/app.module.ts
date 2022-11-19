import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsReadMoreModule } from '@minni/read-more';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminCartComponent } from './admin/admin-cart/admin-cart.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminControlComponent } from './admin/admin-control/admin-control.component';
import { ProfileComponent } from './profile/profile.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsService } from './products/products.service';
import { AboutService } from './about/about.service';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { PersonalInfoComponent } from './profile/personal-info/personal-info.component';
import { YourEventComponent } from './profile/your-event/your-event.component';
import { WatchListComponent } from './profile/watch-list/watch-list.component';
import { OrderListComponent } from './profile/order-list/order-list.component';
import { AlertListComponent } from './profile/alert-list/alert-list.component';
import { HeaderProfComponent } from './profile/header-prof/header-prof.component';
import { ProfileService } from './profile/profile.service';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { UserListComponent } from './admin/admin-user/user-list/user-list.component';
import { UpdateFormComponent } from './admin/admin-user/update-form/update-form.component';
import { AddNewComponent } from './admin/admin-user/add-new/add-new.component';

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
    AllproductsComponent,
    ProductsdetailsComponent,
    PersonalInfoComponent,
    YourEventComponent,
    WatchListComponent,
    OrderListComponent,
    AlertListComponent,
    HeaderProfComponent,
    AdminUserComponent,
    UserListComponent,
    UpdateFormComponent,
    AddNewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsReadMoreModule,
  ],
  providers: [ProductsService, AboutService, ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
