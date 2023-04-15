import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class ContactModule { }
