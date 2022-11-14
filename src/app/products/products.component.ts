import { Component, Input, OnInit} from '@angular/core';
import { NgxsReadMoreModule } from '@minni/read-more';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {


  constructor() {}



  ngOnInit(): void {
    //fetching
    // let that = this;
    // this.myservice.getProducts().subscribe(
    //   {
    //   next(data: any) {
    //     that.products = data;
    //   },
    //   error(err: any) {
    //     console.log(err);
    //   },
    // });
  }




}
