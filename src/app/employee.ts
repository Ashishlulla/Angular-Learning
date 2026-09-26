import { Injectable } from '@angular/core';
import { Employee } from './models/employee';

@Injectable({
  providedIn: 'root',
})



export class EmployeeService {

  private employees: Employee[]=[
    {
    id: 1001,
    name : "Ashish",
    department: "IT",
    salary : 100000,
    isActive : true,
    joiningDate : new Date(2025, 11, 1)
  },
  {
    id: 1002,
    name : "Rohit",
    department: "Finance",
    salary : 80000,
    isActive : false,
    joiningDate : new Date(2023, 5, 23)},
    {
      id: 1003,
      name : "Bhavesh",
      department: "Marketing",
      salary : 65000,
      isActive : true,
      joiningDate : new Date(2023, 12, 1)}, 
    {
      id: 1004,
      name : "Priya",
      department: "IT",
      salary : 75000,
      isActive : true,
      joiningDate : new Date(2025, 11, 1)}, 
    {
      id: 1005,
      name : "Rahul",
      department: "HR",
      salary : 50000,
      isActive : true,
      joiningDate : new Date(2025, 11, 1)
  }];
  

  getMessage(): string{
    return "Hello Employee service";
  }

  getEmployees(): Employee[]
  {
    return this.employees;
  }

  getEmployeeById(id: string): Employee |undefined
  {
    return  this.employees.find(employee=>employee.id.toString() == id);
  }

  AddEmployee(employee: Employee): void
  {
    this.employees.push(employee);
  }

  getActiveEmployees(): Employee[] | undefined
  {
    return this.employees.filter(employee=>employee.isActive == true)
  }

  getITDepartmentsEmployee(dept:string): Employee[] | undefined
  {
    return this.employees.filter(employee=>employee.department == "IT")
  }

  deleteEmployeeById(id: string): Employee[] | undefined
  {
     this.employees = this.employees.filter(employee=>employee.id.toString() !== id.toString());

     return this.employees;
  }

}
