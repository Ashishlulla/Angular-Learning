import { CurrencyPipe, DatePipe, LowerCasePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  imports: [NgClass, CurrencyPipe, DatePipe, UpperCasePipe, LowerCasePipe, NgStyle,  FormsModule],
  selector: 'app-employee-card',
  styleUrl: './employee-card.css',
  templateUrl: './employee-card.html',
})
export class EmployeeCard {
 id= input.required<number>();
 name = input.required<string>();
 department= input.required<string>();
 salary = input.required<number>();
 isActive = input.required<boolean>();
 joiningDate =input.required<Date>();


 protected ResetData(): void{
  this.name = this.name;
  this.department = this.department;
  this.salary = this.salary;
  this.isActive = this.isActive;
  
 }
}
