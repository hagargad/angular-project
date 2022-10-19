import { Component, Input, OnInit} from '@angular/core';
import { NgxsReadMoreModule } from '@minni/read-more';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  addtocart: boolean = false;

  constructor(private myservice: ProductsService) {}

  products: any;

  ngOnInit(): void {
    //fetching
    let that = this;
    this.myservice.getProducts().subscribe(
      {
      next(data: any) {
        that.products = data;
      },
      error(err: any) {
        console.log(err);
      },
    });
  }

  togglebtn(): void {
    this.addtocart = !this.addtocart;
  }

  readMoreOption: NgxsReadMoreModule = {
    readLessText: 'less',
    readMoreText: 'more',
    styles: {
      color: "#666",
    },
    classes: ['custom-style', 'blog-style']
  }



  @Input() oneproduct:any;
}
