import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameramansComponent } from './cameramans.component';

describe('CameramansComponent', () => {
  let component: CameramansComponent;
  let fixture: ComponentFixture<CameramansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameramansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameramansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
