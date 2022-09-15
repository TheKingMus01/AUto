import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariagesComponent } from './mariages.component';

describe('MariagesComponent', () => {
  let component: MariagesComponent;
  let fixture: ComponentFixture<MariagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MariagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MariagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
