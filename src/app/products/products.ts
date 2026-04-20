import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ProductService } from '../services/productService';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
  standalone: false,
})
export class Product implements OnInit {
  products : any;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAllProducts();

  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe({
      next: resp =>{
        this.products = resp;
      },
      error: err => {
        console.log(err);
      }
    });
  }
  handleDelete(product:any){
    let v = confirm("etes vous sure de la suppression?")
    if (v == true){
      this.productService.deleteProduct(product).subscribe({
        next: value =>{
          this.getAllProducts();
        },
        error: err => {
          console.log(err);
        }
      });
      this.getAllProducts();

    }
  }

}
