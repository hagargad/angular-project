import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.css']
})
export class ProductsdetailsComponent implements OnInit {
  products: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient
      .get<any>('assets/db.json')
      .subscribe((data) => (this.products = data));
  }

}
