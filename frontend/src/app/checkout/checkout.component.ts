import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CheckoutSService } from './checkout-s.service';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


products: any;
postid:any;
post:any;

constructor(private product: CheckoutSService ,private router: Router,private cart:CartService)

  {
     this.postid = router.getCurrentNavigation()?.initialUrl.queryParams['id'];
    // this.postid=1;
  }/////if url id

ngOnInit(): void {

let that =this

this.product.getallproduct().subscribe({
next(data:any){
  console.log(data);
that.products = data;
that.products.forEach((element: { id: any; }) => {
if(element.id==that.postid ){
that.post=element
}

});

}

})}



addtocart(){
  this.cart.addToCart(this.postid)

  this.router.navigate(['cart'], );
}

}
