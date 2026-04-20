import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Employee } from './services/employee';
import { EmployeeList } from './features/employee-list/employee-list';

export const routes: Routes = [
    {
        path:'',
        component:Dashboard
    },
    {
        path:'Employee',
        component:EmployeeList
    }
];
