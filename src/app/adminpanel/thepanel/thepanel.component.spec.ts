import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThepanelComponent } from './thepanel.component';

describe('ThepanelComponent', () => {
  let component: ThepanelComponent;
  let fixture: ComponentFixture<ThepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThepanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
