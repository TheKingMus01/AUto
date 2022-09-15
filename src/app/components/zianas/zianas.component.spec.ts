import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZianasComponent } from './zianas.component';

describe('ZianasComponent', () => {
  let component: ZianasComponent;
  let fixture: ComponentFixture<ZianasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZianasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZianasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
