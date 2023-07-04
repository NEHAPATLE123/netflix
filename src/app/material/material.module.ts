import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';

export const array = [
  MatTabsModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...array
  ],
  exports : [
    ...array
  ]
})
export class MaterialModule { }
