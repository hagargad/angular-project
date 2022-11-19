import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouAdminModalComponent } from './abou-admin-modal.component';

describe('AbouAdminModalComponent', () => {
  let component: AbouAdminModalComponent;
  let fixture: ComponentFixture<AbouAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbouAdminModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbouAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
