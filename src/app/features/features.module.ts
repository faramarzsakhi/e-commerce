import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';








@NgModule({
    declarations: [
        LoginComponent,
        BlogComponent,
        ContactComponent,
    ],
    exports: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,

       
    ],
    providers:[]
    
})
export class FeaturesModule { }
