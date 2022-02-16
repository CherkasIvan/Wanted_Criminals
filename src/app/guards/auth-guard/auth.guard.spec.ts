import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
    });
    guard = TestBed.inject(AuthGuard);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
