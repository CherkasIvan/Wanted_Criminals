import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [MatSliderModule, MatMenuModule, MatFormFieldModule, MatIconModule],
  imports: [],
})
export class AppMaterialModule {}
