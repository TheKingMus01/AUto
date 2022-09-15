import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeteDeNaissancesComponent } from './fete-de-naissances.component';

describe('FeteDeNaissancesComponent', () => {
  let component: FeteDeNaissancesComponent;
  let fixture: ComponentFixture<FeteDeNaissancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeteDeNaissancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeteDeNaissancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
