import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchManagerLoginComponent } from './branch-manager-login.component';

describe('BranchManagerLoginComponent', () => {
  let component: BranchManagerLoginComponent;
  let fixture: ComponentFixture<BranchManagerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchManagerLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchManagerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
