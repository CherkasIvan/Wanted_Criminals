import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  exports: [
    MatSliderModule,
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
  ],
  imports: [],
})
export class AppMaterialModule {}
