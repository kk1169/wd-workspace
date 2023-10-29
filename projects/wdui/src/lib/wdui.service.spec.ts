import { TestBed } from '@angular/core/testing';

import { WduiService } from './wdui.service';

describe('WduiService', () => {
  let service: WduiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WduiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
