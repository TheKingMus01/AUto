import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfetetypeComponent } from './addfetetype.component';

describe('AddfetetypeComponent', () => {
  let component: AddfetetypeComponent;
  let fixture: ComponentFixture<AddfetetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfetetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfetetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
