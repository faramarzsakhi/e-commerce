import { AfterContentInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements AfterContentInit{
  @Input()imagesArray:Array<string>=[];
  activeImage="";
  animating=false;
 

  onThumbClick(index:number){
    this.activeImage = this.imagesArray[index];
    this.animating=true;
    setTimeout(()=>{
      this.animating=false;
    },400)
  }

  ngAfterContentInit(){
    this.activeImage=this.imagesArray[0];
  }
}
