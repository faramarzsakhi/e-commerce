import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BreadCrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    BreadCrumbComponent
  ]
})
export class SharedModule { }
