import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackBasicsComponent } from './pack-basics.component';

describe('PackBasicsComponent', () => {
  let component: PackBasicsComponent;
  let fixture: ComponentFixture<PackBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
