import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployComponent } from './create-employ.component';

describe('CreateEmployComponent', () => {
  let component: CreateEmployComponent;
  let fixture: ComponentFixture<CreateEmployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
