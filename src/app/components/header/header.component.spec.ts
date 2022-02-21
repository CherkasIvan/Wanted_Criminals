import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let header: HeaderComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
        TranslateModule.forRoot(),
      ],
    });
    header = TestBed.inject(HeaderComponent);
  });

  it('should render component', () => {
    expect(header).toBeTruthy();
  });
});
