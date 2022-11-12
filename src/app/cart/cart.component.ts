import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { ProductsService } from '../products/products.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Time } from '@angular/common';


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

  checkOut: {
    id: any,
    image: string,
    title: string,
    price: number,
    date: string,
    category:string,
    venue:string,
    city:string,
    timing:Time

  }[] = [];

  constructor(
    private cart: CartService,
    private router: Router,
    private product : ProductsService,
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.updateCart();
  }

  updateCart(): void {
    // this.checkOut.splice(0);

    let temp:any[] =[];   ////
    let products:any[]=[];
    this.cartArr = this.cart.getCart();
    this.httpClient
      .get<any>('assets/db.json')
      .subscribe((data) => (products = data.products));


this.cartArr.forEach((element) => {
temp.push(this.getElement(products,element))

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
      this.checkOut.forEach((element) => {
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

if (element.id == elements.id )
return element;

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
