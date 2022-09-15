import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetetypesComponent } from './fetetypes.component';

describe('FetetypesComponent', () => {
  let component: FetetypesComponent;
  let fixture: ComponentFixture<FetetypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetetypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetetypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
