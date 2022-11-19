import { Component, OnInit } from '@angular/core';
import { AllproductsService } from '../../allproducts/allproducts.service';
import { ModalComponent } from '../../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  constructor(
    private service: AllproductsService,private modalService: MdbModalService
  ) {}

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
      next(data: any) {
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

        that.products = data;
      },
    });

    // this.httpClient
    //   .get<any>('assets/db.json')
    //   .subscribe((data) => (this.products = data));
  }
  openModal() {
    this.modalRef = this.modalService.open(ModalComponent)
  }


  delete(id: any) {
    this.service.deleteProduct(id).subscribe();
    console.log(id);
  }
  edit(id: any, dataedit: any) {
    this.service.updateProduct(id, dataedit).subscribe();
  }
  create(newdata: any) {
    this.service.AddProduct(newdata).subscribe();
  }
}
