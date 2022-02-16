import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkModeComponent } from './dark-mode.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DarkModeComponent],
  exports: [DarkModeComponent],
  imports: [BrowserModule, FormsModule],
})
export class DarkModeModule {}
