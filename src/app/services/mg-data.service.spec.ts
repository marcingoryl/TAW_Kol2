import { TestBed } from '@angular/core/testing';

import { MGDataService } from './mg-data.service';

describe('MGDataService', () => {
  let service: MGDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MGDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
