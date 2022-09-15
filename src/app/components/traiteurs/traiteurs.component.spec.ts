import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiteursComponent } from './traiteurs.component';

describe('TraiteursComponent', () => {
  let component: TraiteursComponent;
  let fixture: ComponentFixture<TraiteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraiteursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
