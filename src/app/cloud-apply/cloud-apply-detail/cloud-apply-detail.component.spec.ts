import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudApplyDetailComponent } from './cloud-apply-detail.component';

describe('CloudApplyDetailComponent', () => {
  let component: CloudApplyDetailComponent;
  let fixture: ComponentFixture<CloudApplyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudApplyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudApplyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
