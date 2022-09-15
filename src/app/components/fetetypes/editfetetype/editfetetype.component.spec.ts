import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfetetypeComponent } from './editfetetype.component';

describe('EditfetetypeComponent', () => {
  let component: EditfetetypeComponent;
  let fixture: ComponentFixture<EditfetetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfetetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfetetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
