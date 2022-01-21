import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'fw-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  // public form!: FormGroup

  @Output() public modal: EventEmitter<boolean> = new EventEmitter<boolean>();

  submit(): void {
    console.warn('Form submitted: ', this.profileForm.value);
  }

  cancel(): void {
    this.modal.emit(false);
  }
  ngOnInit(): void {}
}
