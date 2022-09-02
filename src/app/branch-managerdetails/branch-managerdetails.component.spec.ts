import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchManagerdetailsComponent } from './branch-managerdetails.component';

describe('BranchManagerdetailsComponent', () => {
  let component: BranchManagerdetailsComponent;
  let fixture: ComponentFixture<BranchManagerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchManagerdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchManagerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
