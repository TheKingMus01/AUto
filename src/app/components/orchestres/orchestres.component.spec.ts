import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchestresComponent } from './orchestres.component';

describe('OrchestresComponent', () => {
  let component: OrchestresComponent;
  let fixture: ComponentFixture<OrchestresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrchestresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrchestresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
