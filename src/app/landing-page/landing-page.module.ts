import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SlidingListComponent } from './sliding-list/sliding-list.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    CarouselComponent,
    SlidingListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[

  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LandingPageModule { }
