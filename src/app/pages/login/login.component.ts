import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  hide = true;
  email = '';
  password = '';

  constructor() {}

  ngOnInit(): void {}
}
