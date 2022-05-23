import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


const Materials = [
  MatButtonModule,

];

@NgModule({
  imports: [Materials],
  exports: [Materials]
})
export class AppRoutingModule { }
