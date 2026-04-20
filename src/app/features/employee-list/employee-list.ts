import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Employee } from '../../services/employee';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  // private empService=inject(Employee)
  constructor(private empService:Employee){}

  employees=signal<any[]>([]);

  ngOnInit(){
this.empDetails();
  }
  empDetails(){
    this.empService.getEmployees().subscribe((data:any)=>{
      this.employees.set(data);
    })
  }
}
