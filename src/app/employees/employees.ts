import { Component, signal } from '@angular/core';
import { EmployeeService } from '../employee';
import { Employee } from '../models/employee';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmployeeApi } from '../employee-api';
import { ApiUser } from '../models/api-user';

@Component({
  imports: [DatePipe, RouterLink],
  selector: 'app-employees',
  styleUrl: './employees.css',
  templateUrl: './employees.html',
})

export class Employees {
  protected employees: Employee[] = [];
  protected apiUsers = signal<ApiUser[]>([]);

  constructor(private employeeservice: EmployeeService, private employeeAPI: EmployeeApi) {
    this.employees = employeeservice.getEmployees();
    this.employeeAPI.getUsers().subscribe({
      next: data => {
        console.log('GET USERS:', data);
        console.log('USER COUNT:', data.length);

        this.apiUsers.set(data);
      },
      error: error => {
        console.error('GET USERS ERROR:', error);
      }
    });
  }

  AddApiUser() {
    const user: ApiUser = {
      id: 101,
      name: 'Ashish Lulla',
      username: 'ashishlulla_',
      email: 'ashishlulla@example.com'
    };

    this.employeeAPI.AddUser(user).subscribe(data => {
      console.log('POST Response: ', data);
    });
  }
}

