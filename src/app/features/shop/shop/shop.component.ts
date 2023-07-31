import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  minPrice: number = 0;
  maxPrice: number = 10000;
  ngOnInit() {
    console.warn("shop component loaded");

  }
  imagesArray:Array<string>=[
    "assets/img/product/product_1.png",
    "assets/img/product/product_2.png",
    "assets/img/product/product_3.png",
    "assets/img/product/product_4.png",
    "assets/img/product/product_5.png",
    "assets/img/product/product_6.png",
    "assets/img/product/product_7.png",
    "assets/img/product/product_8.png",
    "assets/img/product/product_5.png",
    "assets/img/product/product_6.png",
    "assets/img/product/product_7.png",
  ]
}
