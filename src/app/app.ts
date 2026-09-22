import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {UpperCasePipe, LowerCasePipe, CurrencyPipe, DatePipe, NgClass, NgStyle } from "@angular/common";
import { EmployeeCard } from "./employee-card/employee-card";

interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
  isActive: boolean;
  joiningDate: Date;
}

@Component({
  imports: [FormsModule, EmployeeCard, NgClass, NgStyle, CurrencyPipe, DatePipe, UpperCasePipe, LowerCasePipe],
  selector: "app-root",
  styleUrl: "./app.css",
  templateUrl: "./app.html"
})
export class App {

  protected readonly employee: Employee = {
    id: 1001,
    name: "Ashish",
    department: "IT",
    salary: 50000,
    isActive: true,
    joiningDate: new Date(2024, 5, 10)
  };

  protected employees: Employee[] = [
    {
      id: 1001,
      name: "Ashish",
      department: "IT",
      salary: 50000,
      isActive: true,
      joiningDate: new Date(2024, 5, 10)
    },
    {
      id: 1002,
      name: "Rahul",
      department: "HR",
      salary: 45000,
      isActive: true,
      joiningDate: new Date(2023, 8, 15)
    },
    {
      id: 1003,
      name: "Priya",
      department: "Finance",
      salary: 55000,
      isActive: false,
      joiningDate: new Date(2022, 2, 20)
    }
  ];

  protected calculateAnnualSalary(salary: number): number {
    return salary * 12;
  }

  protected getEmployeeStatus(status: boolean): string {
    return status ? "Active Employee" : "Inactive Employee";
  }

  protected onEmployeeSelected(name: string): void {
    console.log("Selected employee:", name);
  }

  protected showMesaage(): void {
    console.log("User clicked me!");
  }

  protected changeName(): void {
  }

  protected updateSalary(): void {
  }

  protected resetSalary(): void {
    this.employee.salary = 50000;
  }

  protected toggleEmployeeStatus(): void {
    this.employee.isActive = !this.employee.isActive;
  }

  protected resetData(): void {
    this.employee.name = "Ashish";
    this.employee.salary = 50000;
    this.employee.isActive = true;
    this.employee.department = "IT";
  }

  protected changeDepartment(): void {
    if (this.employee.department === "IT") {
      this.employee.department = "HR";
    } else {
      this.employee.department = "IT";
    }
  }
}