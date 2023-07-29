import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent {
  Data:any;
  bread:string;
  constructor(private route:ActivatedRoute){
    
  }
  
  ngOnInit() {
    this.Data =this.route.snapshot.data;
    this.bread = this.Data.bread;
    console.log(this.bread);
  }

 
}
