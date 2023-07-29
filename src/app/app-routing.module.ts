import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { LoginComponent } from './features/login/login.component';
import { ShopComponent } from './features/shop/shop/shop.component';


const routes: Routes = [
  {path:"home" , component:LandingPageComponent, data:{bread:"home"}},
  {path:"login", component:LoginComponent, data:{bread:"Login"}},
  {path:"shop",component:ShopComponent, data:{bread:"Shop"}},
  {path:"" , redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
