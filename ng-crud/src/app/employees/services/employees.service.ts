import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { Employee } from "../../models/employee.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  private listEmployees: Employee[];

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:3000/employees");
  }

  getEmployee(id: number): Employee {
    return this.listEmployees.find(e => e.id === id);
  }

  delete(id: number) {
    const foundEmployee = this.listEmployees.findIndex(e => e.id === id);
    if (foundEmployee !== -1) {
      this.listEmployees.splice(foundEmployee, 1);
    }
  }

  save(employee: Employee) {
    if (employee.id === null) {
      const maxId = this.listEmployees.reduce((e1, e2) => {
        return e1.id > e2.id ? e1 : e2;
      }).id;
      employee.id = maxId + 1;
      this.listEmployees.push(employee);
    } else {
      const foundIndex = this.listEmployees.findIndex(
        e => e.id === employee.id
      );
      this.listEmployees[foundIndex] = employee;
    }
  }
}
