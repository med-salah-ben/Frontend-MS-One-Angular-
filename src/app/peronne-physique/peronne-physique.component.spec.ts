import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeronnePhysiqueComponent } from './peronne-physique.component';

describe('PeronnePhysiqueComponent', () => {
  let component: PeronnePhysiqueComponent;
  let fixture: ComponentFixture<PeronnePhysiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeronnePhysiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeronnePhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
