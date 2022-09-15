import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorchestreComponent } from './editorchestre.component';

describe('EditorchestreComponent', () => {
  let component: EditorchestreComponent;
  let fixture: ComponentFixture<EditorchestreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorchestreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorchestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
