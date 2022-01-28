import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  arrayNav = [
    { id: 1, name: 'bill' },
    { id: 2, name: 'bob' },
    { id: 3, name: 'billy' },
  ];

  foo() {
    this.arrayNav = [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bob' },
      { id: 3, name: 'billy' },
    ];
  }

  identify(index, item) {
    return item.id;
  }
  constructor() {}
}
