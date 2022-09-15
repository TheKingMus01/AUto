import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorchestreComponent } from './addorchestre.component';

describe('AddorchestreComponent', () => {
  let component: AddorchestreComponent;
  let fixture: ComponentFixture<AddorchestreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddorchestreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorchestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
