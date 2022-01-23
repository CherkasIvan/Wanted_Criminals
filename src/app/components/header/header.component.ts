import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  clock = Date.now();
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.clock = Date.now();
    }, 1000);
  }

}
