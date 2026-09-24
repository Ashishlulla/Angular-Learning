import { Component } from '@angular/core';
import { EmployeeService } from '../employee';

@Component({
  imports: [],
  selector: 'app-employee-counter',
  styleUrl: './employee-counter.css',
  templateUrl: './employee-counter.html',
})
export class EmployeeCounter 
{
  constructor( private employeeService: EmployeeService){}

  protected employeeCount = 0;

  protected countEmployees(): void
  {
    this.employeeCount = this.employeeService.getEmployees().length;
  }

}
