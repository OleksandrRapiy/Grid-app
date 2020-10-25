import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  exports: [
    MatToolbarModule, 
    MatCheckboxModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
