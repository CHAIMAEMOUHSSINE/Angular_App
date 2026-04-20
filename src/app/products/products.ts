import { Component, OnInit } from '@angular/core';
import { NgIf } from "../../../node_modules/@angular/common/types/_common_module-chunk";
import { Product } from '../services/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit{
  products : Array<any> = [];

  constructor(private productService: Product) {

  }
  ngOnInit(): void {
    this.getAllProducts();}

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: resp => {
        this.products = resp;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  handleDelete(p: any) {
    let v= confirm("Are you sure ?");
    if(v==true) {
      this.productService.deleteProduct(p).subscribe({
        next: resp => {
          this.getAllProducts();
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }
}
