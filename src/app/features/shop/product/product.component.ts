import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productCount:number=0;
  activeTab:string="description";
 imagesArray:Array<string>=[
    "assets/img/product/single-product/product_1.png",
    "assets/img/product/product_2.png",
    "assets/img/product/product_3.png",
    "assets/img/product/product_4.png",
  ]
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
