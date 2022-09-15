import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LebsasComponent } from './lebsas.component';

describe('LebsasComponent', () => {
  let component: LebsasComponent;
  let fixture: ComponentFixture<LebsasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LebsasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LebsasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
