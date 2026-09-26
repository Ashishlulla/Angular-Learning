import { Component } from '@angular/core';
import { EmployeeService } from '../employee';
import { Employee } from '../models/employee';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [DatePipe, RouterLink],
  selector: 'app-employees',
  styleUrl: './employees.css',
  templateUrl: './employees.html',
})


export class Employees {
  
  protected employees: Employee[] = [];
  
  constructor(private employeeservice: EmployeeService)
  {
    this.employees = employeeservice.getEmployees();
  }
  
}

