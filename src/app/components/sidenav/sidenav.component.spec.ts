import { TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';

describe('SidenavComponen', () => {
  let nav: SidenavComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidenavComponent],
      imports: [],
    });
    nav = TestBed.inject(SidenavComponent);
  });

  it('should be created', () => {
    expect(nav).toBeTruthy();
  });
});
