import { AfterViewInit, Component} from '@angular/core';
import { ProductInterface } from 'src/app/common/models/product/product_interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  implements AfterViewInit{
  constructor(private _cart:CartService){}
  productCount=0;
  activeTab="description";
  cartMessage:boolean;
 
  product:ProductInterface={
    title:"Faded SkyBlu Denim Jeans",
    price:149,
    category:"household",
    isAvailable:true,
    intro:"First replenish living. Creepeth image image. Creeping can't, won't called. Two fruitful let days signs sea together all land fly subdue",
    quantity:0,
    imagesArray:[
      "assets/img/product/single-product/product_1.png",
      "assets/img/product/product_2.png",
      "assets/img/product/product_3.png",
      "assets/img/product/product_4.png",
    ]
  };
  // functions
  addCount():void{
    if(this.productCount<100){
      this.productCount++;
    }
  }
  minusCount():void{
    if(this.productCount > 0){
      this.productCount--;
    }
  }

  addToCart():void{
    this.product.quantity=this.productCount;
    this._cart.addToCart(this.product);
    this.product.quantity=0;
    this.productCount=0;
    this.cartMessage=true;
    setTimeout(() => {
      this.cartMessage=false;
    }, 2000);
    
  }

  likeHover(elem:HTMLElement){
    elem.classList.add('like_hover');
  }
  likeOut(elem:HTMLElement){
    elem.classList.remove('like_hover');
  }
  liked(elem:HTMLElement){
    elem.children[1].classList.remove('visually-hidden');
    elem.classList.add('liked_us');
    elem.children[1].classList.add('liked_icon');

  }
   ngAfterViewInit(){
    window.scroll(0,600); 
   }
    

}
