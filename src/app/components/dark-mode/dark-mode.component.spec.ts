import { TestBed } from '@angular/core/testing';

import { DarkModeComponent } from './dark-mode.component';

describe('DarkModeComponent', () => {
  let app: DarkModeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DarkModeComponent],
      imports: [],
    });
    app = TestBed.inject(DarkModeComponent);
  });

  it('should be created', () => {
    expect(app).toBeTruthy();
  });
});
