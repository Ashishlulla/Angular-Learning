import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../employee';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [DatePipe, RouterLink],
  selector: 'app-employees-details',
  styleUrl: './employees-details.css',
  templateUrl: './employees-details.html',
})
export class EmployeesDetails {

  protected employee: Employee | undefined;


  constructor(private employeeService: EmployeeService, private route:ActivatedRoute)
  {
    const id = this.route.snapshot.paramMap.get('id')

    if (id) 
    {
        this.employee = this.employeeService.getEmployeeById(id);  
    }
    
  }
}
