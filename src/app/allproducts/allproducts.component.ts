import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { NgxsReadMoreModule } from '@minni/read-more';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css'],
})
export class AllproductsComponent implements OnInit {

  addtocart: boolean = false;

  products: any[] = [];
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res;
    });
  }

  togglebtn(): void {
    this.addtocart = !this.addtocart;
  }

  readMoreOption: NgxsReadMoreModule = {
    readLessText: 'less',
    readMoreText: 'more',
    styles: {
      color: '#666',
    },
    classes: ['custom-style', 'blog-style'],
  };

  // @Input() oneproduct:any;
}
