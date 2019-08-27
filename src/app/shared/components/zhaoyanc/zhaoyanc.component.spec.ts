import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhaoyancComponent } from './zhaoyanc.component';

describe('ZhaoyancComponent', () => {
  let component: ZhaoyancComponent;
  let fixture: ComponentFixture<ZhaoyancComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhaoyancComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhaoyancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
