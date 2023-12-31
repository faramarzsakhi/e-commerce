import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommentInterface } from 'src/app/common/models/comment/comment_interface';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss']
})
export class CommentsSectionComponent {
  // observable
  comments$: Observable<CommentInterface[]>
  constructor(private commentService: CommentService) {
    this.comments$ = this.commentService.getComments();
  }
  // variables
  @ViewChild('stars') stars: ElementRef;
  ss: Array<number> = [1, 2, 3, 4, 5];
  review: NgForm;
  phoneNumPat = new RegExp("09[0-3][0-9]-?[0-9]{3}-?[0-9]{4}");



  
  
  
  // functions
  giveStar(num: number): void {
    this.stars.nativeElement.childNodes.forEach((v: HTMLElement, i: number) => {
      if (i < num) {
        v.classList.remove("opacity-0")
      }
    })
  }
  onSubmit(form: NgForm) {
    console.log(form.value);

  }
 


}
