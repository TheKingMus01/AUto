import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnivComponent } from './aniv.component';

describe('AnivComponent', () => {
  let component: AnivComponent;
  let fixture: ComponentFixture<AnivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
