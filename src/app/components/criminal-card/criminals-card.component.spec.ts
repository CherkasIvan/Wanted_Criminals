import { TestBed } from '@angular/core/testing';

import { CriminalCardComponent } from './criminal-card.component';

describe('CriminalsCardComponent', () => {
  let criminalsCard: CriminalCardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CriminalCardComponent],
      imports: [],
    });
    criminalsCard = TestBed.inject(CriminalCardComponent);
  });

  it('should be created', () => {
    expect(criminalsCard).toBeTruthy();
  });
});
