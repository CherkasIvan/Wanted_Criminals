import { Component, Input } from '@angular/core';

@Component({
  selector: 'fw-criminal-card',
  templateUrl: './criminal-card.component.html',
  styleUrls: ['./criminal-card.component.scss'],
})
export class CriminalCardComponent {
  @Input() items: any;
  public isViewMore: boolean = false;
  public viewMore(): void {
    this.isViewMore = !this.isViewMore;
    console.log(this.isViewMore)
  }
  constructor() {}
}
