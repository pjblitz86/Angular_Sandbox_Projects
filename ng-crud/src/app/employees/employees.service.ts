import { of } from "rxjs";
import { Employee } from "./../models/employee.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EmployeesService {
  constructor() {}

  // hardcode for now, later will fetch from db
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: "Mark",
      gender: "male",
      contactPreference: "email",
      email: "mark@pragimtech.com",
      dateOfBirth: new Date("10/25/1988"),
      department: "3",
      isActive: true,
      photoPath: "assets/images/mark.png"
    },
    {
      id: 2,
      name: "Mary",
      gender: "female",
      contactPreference: "phone",
      phoneNumber: 2345978640,
      dateOfBirth: new Date("11/20/1979"),
      department: "2",
      isActive: true,
      photoPath: "assets/images/mary.png"
    },
    {
      id: 3,
      name: "John",
      gender: "male",
      contactPreference: "phone",
      phoneNumber: 5432978640,
      dateOfBirth: new Date("3/25/1976"),
      department: "3",
      isActive: false,
      photoPath: "assets/images/john.png"
    }
  ];

  getEmployees(): Observable<Employee[]> {
    // use delay operator from rxjs to simulate http call
    return of(this.listEmployees).pipe(delay(400));
  }

  getEmployee(id: number): Employee {
    return this.listEmployees.find(e => e.id === id);
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
