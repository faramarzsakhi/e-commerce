import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ItemAxis } from 'src/app/common/models/itemsAxis';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  minPrice = 0;
  maxPrice = 10000;
  axisArray: Array<ItemAxis> = [];
  winY = 0;
  windowWidth = window.innerWidth;
  @ViewChildren("item") itemdivs: QueryList<ElementRef>;
  itemsArray: Array<ElementRef>;




  ngAfterViewInit() {

    // observer threshold
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        } else {
          entry.target.classList.remove('active')
        }
      })
    }, options)
    this.itemsArray = ([...this.itemdivs.toArray()])

    // window width to work only in mobile size

    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }




    this.itemsArray.forEach(item => {
      if (this.windowWidth < 760) {
        observer.observe(item.nativeElement);
      }else{
        observer.unobserve(item.nativeElement);
      }


    });



  }













  // If there were an API it would have been replaced with service and observablese and product object
  imagesArray: Array<string> = [
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
