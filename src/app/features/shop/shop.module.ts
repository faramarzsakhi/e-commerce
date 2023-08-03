import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { SharedModule } from "../../shared/shared.module";
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';




@NgModule({
    declarations: [
        ShopComponent,
        ProductComponent,
        ImageGalleryComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatSliderModule,
        FormsModule,
        RouterModule
    ],
    providers:[
    ]
})
export class ShopModule { }
