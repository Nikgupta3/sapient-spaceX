import { TestBed } from '@angular/core/testing';

import { SpaceXDataService } from './space-xdata.service';

describe('SpaceXDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpaceXDataService = TestBed.get(SpaceXDataService);
    expect(service).toBeTruthy();
  });
});
