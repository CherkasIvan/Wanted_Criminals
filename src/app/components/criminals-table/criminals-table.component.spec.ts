import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { CriminalsTableComponent } from './criminals-table.component';

describe('CriminalsTableComponent', () => {
  let criminalsTable: CriminalsTableComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CriminalsTableComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot({}),
      ],
    });
    criminalsTable = TestBed.inject(CriminalsTableComponent);
  });

  it('should be created', () => {
    expect(criminalsTable).toBeTruthy();
  });
});
