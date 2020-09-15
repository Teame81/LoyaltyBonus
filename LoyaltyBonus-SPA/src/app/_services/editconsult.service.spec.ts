/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditconsultService } from './editconsult.service';

describe('Service: Editconsult', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditconsultService]
    });
  });

  it('should ...', inject([EditconsultService], (service: EditconsultService) => {
    expect(service).toBeTruthy();
  }));
});
