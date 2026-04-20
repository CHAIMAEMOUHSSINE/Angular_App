import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [
    NgForOf
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products = [
    { id: 1, name: 'Computer', price: 10 , selected: true},
    { id: 2, name: 'Printer', price: 20 , selected: true },
    { id: 3, name: 'Smartphone', price: 30 , selected : false},
  ]
}
