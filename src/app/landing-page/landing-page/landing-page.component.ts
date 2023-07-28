import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
@ViewChild('days')daysh:ElementRef = {} as ElementRef;
@ViewChild('hours')hoursh:ElementRef = {} as ElementRef;
@ViewChild('minutes')minutesh:ElementRef = {} as ElementRef;
@ViewChild('seconds')secondsh:ElementRef = {} as ElementRef;




ngOnInit(){
 let  countDownDate= new Date("Jan 5, 2024 15:37:25").getTime();
  let x = setInterval(()=> {

    // Get today's date and time
   let now:number = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance:number = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
   
    this.daysh.nativeElement.innerHTML = days;
    this.hoursh.nativeElement.innerHTML = hours;
    this.minutesh.nativeElement.innerHTML = minutes;
    this.secondsh.nativeElement.innerHTML = seconds;
    // If the count down is finished, write some text
    if (distance < 0) {

      clearInterval(x);
    }
  }, 1000);
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
]

}
