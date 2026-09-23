import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeCard } from './employee-card/employee-card';

interface Employee{
  id: number;
  name: string;
  department: string;
  salary: number;
  isActive: boolean;
  joiningDate: Date;
}


@Component({
  imports: [ EmployeeCard ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Practice');

  protected  employees: Employee[]=[
    {
        id:1001,
        name:'Ashish',
        department: "IT",
        salary: 50000,
        isActive:true,
        joiningDate: new Date(2025, 11, 1)
    },
   {
       id:1002,
        name:'Akshay',
        department: "Marketing",
        salary: 650000,
        isActive:true,
        joiningDate: new Date(2023, 5, 10)
   },
    {
         id:1003,
        name:'Rahul',
        department: "Finance",
        salary: 70000,
        isActive:true,
        joiningDate: new Date(2023, 10, 1)
    }, 
    {
       id:1004,
        name:'Priya',
        department: "IT",
        salary: 95000,
        isActive:true,
        joiningDate: new Date(2025, 11, 1)
    }, 
    {
       id:1005,
        name:'Rohit',
        department: "HR",
        salary: 80000,
        isActive:true,
        joiningDate: new Date(2024, 4, 1)
    }, 
  ]
}
