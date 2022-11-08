import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
// import { NgxsReadMoreModule } from '@minni/read-more';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


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

  products: any;

  // constructor(private service: ProductsService) {

  // }
  constructor(private httpClient: HttpClient) {
    // this.products = db;
  }

  ngOnInit(): void {
    this.httpClient
      .get<any>('assets/db.json')
      .subscribe((data) => (this.products = data));
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
}
