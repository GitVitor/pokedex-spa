import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainHeaderComponent } from './app-main-header.component';

describe('AppMainHeaderComponent', () => {
  let component: AppMainHeaderComponent;
  let fixture: ComponentFixture<AppMainHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMainHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
