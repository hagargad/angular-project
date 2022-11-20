import { Component, OnInit } from "@angular/core";
import { AllproductsService } from "../../allproducts/allproducts.service";
// import { ModalComponent } from '../../modal/modal.component';
// import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-admin-products",
  templateUrl: "./admin-products.component.html",
  styleUrls: ["./admin-products.component.css"],
})
export class AdminProductsComponent implements OnInit {
  // modalRef: MdbModalRef<ModalComponent> | null = null;
  constructor(
    private formBuilder: FormBuilder,
    private service: AllproductsService
  ) {} // ,private modalService: MdbModalService

  products: any;
  imageURL: string='';

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
  // openModal() {
  //   this.modalRef = this.modalService.open(ModalComponent)
  // }
  createEvent = new FormGroup({
    eventtitle: new FormControl(""),
    eventdesc: new FormControl(""),
    eventtiming: new FormControl(""),
    eventprice: new FormControl(""),
    eventdate: new FormControl(""),
    eventimage: new FormControl(""),
    eventcity: new FormControl(""),
    eventvenue: new FormControl(""),
    eventcategory: new FormControl(""),
  });
  // createEvent = this.formBuilder.group({
  //   eventtitle: '',
  //     eventdesc: '',
  //     eventtiming: '',
  //     eventprice: '',
  //     eventdate: '',
  //     eventimage: '',
  //     eventcity: '',
  //     eventvenue:'',
  //     eventcategory: '',
  // });

  onSubmit(): void {
    console.warn("Your Event has been submitted", this.createEvent.value);
    this.createEvent.reset();
  }

  deleteTickets(id: any) {
    this.service.deleteTickets(id).subscribe();
  }
  edit(id: any, dataedit: any) {
    this.service.updateProduct(id, dataedit).subscribe();
  }
  AddProduct() {
    this.service.AddProduct(this.createEvent.value ).subscribe();
    // console.log(this.createEvent.value);
  }
}
