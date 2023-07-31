import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
isSearchVisible:boolean=false;
toggleSearch(){
  this.isSearchVisible= !this.isSearchVisible;

}
}
