import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunerairesComponent } from './funeraires.component';

describe('FunerairesComponent', () => {
  let component: FunerairesComponent;
  let fixture: ComponentFixture<FunerairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunerairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunerairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
