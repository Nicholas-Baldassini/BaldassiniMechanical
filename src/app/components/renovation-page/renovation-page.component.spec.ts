import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovationPageComponent } from './renovation-page.component';

describe('RenovationPageComponent', () => {
  let component: RenovationPageComponent;
  let fixture: ComponentFixture<RenovationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenovationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
