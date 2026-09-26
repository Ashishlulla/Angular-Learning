import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Employees } from './employees/employees';
import { EmployeesDetails } from './employees-details/employees-details';

export const routes: Routes = [
    {path:'',  component:Home}, 
    {path:'about', component:About},
    {path:'employees', component:Employees},
    {path:'employee/:id', component:EmployeesDetails}
];
