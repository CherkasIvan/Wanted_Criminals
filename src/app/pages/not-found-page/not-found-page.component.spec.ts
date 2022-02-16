import { TestBed } from '@angular/core/testing';

import { NotFoundPageComponent } from './not-found-page.component';

describe('NotFoundPageComponent', () => {
  let notFound: NotFoundPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotFoundPageComponent],
    });
    notFound = TestBed.inject(NotFoundPageComponent);
  });

  it('should render component', () => {
    expect(notFound).toBeTruthy();
  });
});
