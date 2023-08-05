import { Injectable } from '@angular/core';
import { ProductInterface } from '../common/models/product/product_interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 cartProducts:Array<ProductInterface> = [{
  title:"Minimalistic shop for multipurpose use",
  category:"",
  imagesArray:["assets/img/product/single-product/cart-1.jpg"],
  intro:"Minimalistic shop for multipurpose use",
  isAvailable:true,
  price:360,
  quantity:2
 }];
  constructor() { }
  addToCart(product:ProductInterface){
    this.cartProducts.push(product);
  }
  getProducts(){
    return this.cartProducts;
  }
  cartLenght(){
    return this.cartProducts.length;
  }
}
