import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class ToasterService {
  constructor(private snackBar: MatSnackBar) {
  }

  open(message: string, type?: string): void {
    this.snackBar.open(
      message,
      'Close',
      {
        verticalPosition: 'top',
        duration: 3000,
        panelClass: type || ''
      }
    );
  }
}
