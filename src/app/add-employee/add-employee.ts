import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee';

import { Router } from '@angular/router';
@Component({
  imports: [FormsModule],
  selector: 'app-add-employee',
  styleUrl: './add-employee.css',
  templateUrl: './add-employee.html',
})
export class AddEmployee {

  protected employee: Employee = {
    id: 0,
    name:'',
    department: '',
    salary: 0,
    isActive:false,
    joiningDate:new Date()
  }

  constructor(private employeeService: EmployeeService, private router: Router){}

  protected AddEmployee(employee: Employee): void
  {
    this.employeeService.AddEmployee(employee);

    console.log(employee);

    this.router.navigate(['/employees']);
  }
}
