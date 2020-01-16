import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignMenuComponent } from './sign-menu.component';

describe('SignMenuComponent', () => {
  let component: SignMenuComponent;
  let fixture: ComponentFixture<SignMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
