import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialPageComponent } from './residential-page.component';

describe('ResidentialPageComponent', () => {
  let component: ResidentialPageComponent;
  let fixture: ComponentFixture<ResidentialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
