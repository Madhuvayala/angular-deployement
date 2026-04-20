import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  private http=inject(HttpClient);

  private api='http://localhost:3000/employees';
  private leaves= 'http://localhost:3000/leaves';

  getEmployees(){
    return this.http.get(this.api);
  }
}
