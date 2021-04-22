import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersPhyComponent } from './pers-phy.component';

describe('PersPhyComponent', () => {
  let component: PersPhyComponent;
  let fixture: ComponentFixture<PersPhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersPhyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersPhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
