import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnniversairesComponent } from './anniversaires.component';

describe('AnniversairesComponent', () => {
  let component: AnniversairesComponent;
  let fixture: ComponentFixture<AnniversairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnniversairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnniversairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
