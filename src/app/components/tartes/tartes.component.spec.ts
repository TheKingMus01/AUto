import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TartesComponent } from './tartes.component';

describe('TartesComponent', () => {
  let component: TartesComponent;
  let fixture: ComponentFixture<TartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TartesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
