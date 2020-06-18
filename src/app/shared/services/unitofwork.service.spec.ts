import { TestBed } from '@angular/core/testing';

import { UnitofworkService } from './unitofwork.service';

describe('UnitofworkService', () => {
  let service: UnitofworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitofworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
