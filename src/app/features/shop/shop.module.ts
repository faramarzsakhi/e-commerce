import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { SharedModule } from "../../shared/shared.module";
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';




@NgModule({
    declarations: [
        ShopComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatSliderModule,
        FormsModule
    ],
    providers:[
    ]
})
export class ShopModule { }
