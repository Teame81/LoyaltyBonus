/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddconsultService } from './addconsult.service';

describe('Service: Addconsult', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddconsultService]
    });
  });

  it('should ...', inject([AddconsultService], (service: AddconsultService) => {
    expect(service).toBeTruthy();
  }));
});
