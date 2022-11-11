import { TestBed } from '@angular/core/testing';

import { AllproductsServiceTsService } from './allproducts.service.ts.service';

describe('AllproductsServiceTsService', () => {
  let service: AllproductsServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllproductsServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
