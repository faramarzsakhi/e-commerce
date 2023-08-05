import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private _cart:CartService){}
  cartQuantity:number;
  ngDoCheck(){
    this.cartQuantity=this._cart.cartLenght();
  }
isSearchVisible:boolean=false;
toggleSearch(){
  this.isSearchVisible= !this.isSearchVisible;

}
}
