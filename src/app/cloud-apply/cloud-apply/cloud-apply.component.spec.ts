import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudApplyComponent } from './cloud-apply.component';

describe('CloudApplyComponent', () => {
  let component: CloudApplyComponent;
  let fixture: ComponentFixture<CloudApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
