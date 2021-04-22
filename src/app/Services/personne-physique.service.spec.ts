import { TestBed } from '@angular/core/testing';

import { PersonnePhysiqueService } from './personne-physique.service';

describe('PersonnePhysiqueService', () => {
  let service: PersonnePhysiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonnePhysiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
