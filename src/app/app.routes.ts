import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Employee } from './services/employee';
import { EmployeeList } from './features/employee-list/employee-list';
import { SideNavBar } from './side-nav-bar/side-nav-bar';
import { Debounce } from './debounce/debounce';

export const routes: Routes = [
    {
        path:'',
        component:Dashboard
    },
    {
        path:'Employee',
        component:EmployeeList
    },
     {
        path:'side-navbar',
        component:SideNavBar
    },
    {
        path:'debounce',
        component:Debounce
    }
];
