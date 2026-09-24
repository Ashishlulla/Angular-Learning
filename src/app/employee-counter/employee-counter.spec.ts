import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeCounter } from './employee-counter';

describe('EmployeeCounter', () => {
  let component: EmployeeCounter;
  let fixture: ComponentFixture<EmployeeCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
