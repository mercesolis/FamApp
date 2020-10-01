import { TestBed } from '@angular/core/testing';

import { DbzService } from './dbz.service';

describe('DbzService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbzService = TestBed.get(DbzService);
    expect(service).toBeTruthy();
  });
});
