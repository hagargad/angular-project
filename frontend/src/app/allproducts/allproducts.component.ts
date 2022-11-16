import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../products/products.service';
// import { NgxsReadMoreModule } from '@minni/read-more';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AllproductsService } from './allproducts.service';
import { Router } from '@angular/router';

// interface Product {
//   id: Number;
//   title: String;
//   desc: String;
//   image: String;
// }

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css'],
})
export class AllproductsComponent implements OnInit {
  // addtocart: boolean = false;

  // constructor(private service: ProductsService) {

  // }
  constructor(private service:AllproductsService ,private router: Router) {}
  products: any;

  id: any;
  title: any;
  desc: any;
  image: any;
  price: any;
  date: any;
  timing: any;
  city: any;
  venue: any;
  category: any;
  ngOnInit(): void {
    let that = this;
    this.service.getAllProducts().subscribe({
      next(data:any) {
        that.id = data.id;
        that.title = data.title;
        that.desc = data.desc;
        that.image = data.image;
        that.price = data.price;
        that.date = data.date;
        that.timing = data.timing;
        that.city = data.city;
        that.venue = data.venue;
        that.category = data.category;

        that.products=data;
      }
    });
    // this.httpClient
    //   .get<any>('assets/db.json')
    //   .subscribe((data) => (this.products = data));
  }

  // getProducts() {
  //   this.service.getAllProducts().subscribe((res: any) => {
  //     this.products = res;
  //   }, error =>{
  //    console.log("error.message");
  //   }
  //   );
  // }

  // togglebtn(): void {
  //   this.addtocart = !this.addtocart;
  // }

  // readMoreOption: NgxsReadMoreModule = {
  //   readLessText: 'less',
  //   readMoreText: 'more',
  //   styles: {
  //     color: '#666',
  //   },
  //   classes: ['custom-style', 'blog-style'],
  // };

  // @Input() oneproduct:any;



goto(id:any){
this.router.navigate(['checkout'], { queryParams: { id:id }});
}

}
