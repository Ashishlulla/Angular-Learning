import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {UpperCasePipe, LowerCasePipe, CurrencyPipe, DatePipe, NgClass, NgStyle } from "@angular/common";
import { EmployeeCard } from "./employee-card/employee-card";
import { EmployeeService } from "./employee";
import { Employee } from "./models/employee";
import { EmployeeCounter } from "./employee-counter/employee-counter";
import { RouterOutlet, RouterLink } from "@angular/router";





@Component({
  imports: [FormsModule, EmployeeCard, NgClass, NgStyle, CurrencyPipe, DatePipe, UpperCasePipe, LowerCasePipe, EmployeeCounter, RouterOutlet, RouterLink],
  selector: "app-root",
  styleUrl: "./app.css",
  templateUrl: "./app.html"
})



export class App {

  constructor(private employeeService: EmployeeService){}

  protected showServiceMessage(): void
  {
    console.log(this.employeeService.getMessage());
  }

  protected showEmployees(): void
  {
     console.log(this.employeeService.getEmployees());
  }

  protected showEmployeeById(id: string): void
  {
      console.log(this.employeeService.getEmployeeById(id));
  }

  protected AdEmployee(): void
  {
    const employee: Employee=
    {
      id: 1001,
      name: "Pushed Employee",
      department: "Test dept.",
      salary: 50000,
      joiningDate: new Date(2026, 7, 1),
      isActive: true
    }

    this.employeeService.AddEmployee(employee);
  }


  protected GetActiveEmployees(): void
  {
    console.log(this.employeeService.getActiveEmployees());
  }

  protected GetITDepartmentEmployees(): void
  {
    console.log(this.employeeService.getITDepartmentsEmployee("IT"));
  }

  protected DeleteEmployeeById(id:string): void
  {
    console.log(this.employeeService.deleteEmployeeById(id));
  }
}