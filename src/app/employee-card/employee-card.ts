import { Component, input, output } from "@angular/core";
import {NgClass, NgStyle, DatePipe, CurrencyPipe, UpperCasePipe, LowerCasePipe} from "@angular/common";

@Component({
  imports: [NgClass, NgStyle, DatePipe, CurrencyPipe, LowerCasePipe, UpperCasePipe],
  selector: "app-employee-card",
  styleUrl: "./employee-card.css",
  templateUrl: "./employee-card.html"
})
export class EmployeeCard {

  id = input.required<number>();
  name = input.required<string>();
  isActive = input<boolean>();
  department = input<string>();
  monthlySalary = input<number>();
  joiningDate = input<Date>();
  employeeSelected = output<string>();

  selectEmployee(): void {
    this.employeeSelected.emit(this.name());
  }
}