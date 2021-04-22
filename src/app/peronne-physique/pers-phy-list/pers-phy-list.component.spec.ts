import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersPhyListComponent } from './pers-phy-list.component';

describe('PersPhyListComponent', () => {
  let component: PersPhyListComponent;
  let fixture: ComponentFixture<PersPhyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersPhyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersPhyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
