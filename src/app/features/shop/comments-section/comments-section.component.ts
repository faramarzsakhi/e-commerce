import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss']
})
export class CommentsSectionComponent {
  @ViewChild('stars') stars: ElementRef;
  ss:Array<number>=[1,2,3,4,5];
  review:NgForm;
 phoneNumPat= new RegExp("09[0-3][0-9]-?[0-9]{3}-?[0-9]{4}");
 
 
 
  giveStar(num: number): void {
    this.stars.nativeElement.childNodes.forEach((v:HTMLElement,i:number)=>{
      if (i<num){
        v.classList.remove("opacity-0")
      }
    })
  }
  onSubmit(form:NgForm){
    alert("successfully submitied");

  }
    

}
