import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { ProductsService } from '../products/products.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Time } from '@angular/common';
import { CheckoutSService } from '../checkout/checkout-s.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  subTotal = 0;  ////never change
  cartArr: {
    id: any,
    count: number
    }[] = [
    ];

  checkOut: any = [];

  constructor(
    private cart: CartService,
    private router: Router,
    private product : CheckoutSService,
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.updateCart();
  }




  updateCart(): void {
    // this.checkOut.splice(0);

       ////
      let temp:any=[];
       let products:any;
       this.cartArr = this.cart.getCart();
       let that =this

    this.product.getallproduct().subscribe({
    next:(data)=>{
      console.log(data);
      products = data;


    },
    complete:()=>{

      this.cartArr.forEach((element) => {

        products.forEach((element1: { id: any; })=>{

      if (element1.id == element.id )

      temp.push(element1)
      })

      // temp.push(this.getElement(products,element))

     })
console.log(temp)
this.checkOut=temp

}

    })



    // this.cartArr.forEach((element) => {
    //   this.product.getProductsByID (element.id).subscribe({
    //     next: (data) => {
    //       temp.push(data);
    //     },
    //     error: (e) => {
    //       console.log(e);
    //     },
    //     complete: () => {},
    //   });
    // });

      this.checkOut = temp;
      this.subTotal=0
      console.log(this.checkOut);
      this.checkOut.forEach((element: { id: any; price: number; }) => {
      this.subTotal += this.getCount(element.id) * element.price;
    });
  }

getCount(id: any) {
  let count = 0;
  this.cartArr = this.cart.getCart();
  this.cartArr.forEach((element) => {
    if (element.id == id) count = element.count;
  });
  return count;
}

getElement(products:any[],elements:any):any{
products.forEach((element)=>{

if (element.id == elements.id ){
console.log(element)
return element;

}


})
}

placeorder(){
  let temp={'order':this.cart.getCart(), 'status':'pending'}

   this.httpClient
      .post<any>('assets/db.json',temp)
      .subscribe((data) => (console.log(data)));

}
}


//////////////////////////////
// *ngFor="let p of checkOut"
// {{p,image}}
// {{p.price * getCount(p.id)}}
