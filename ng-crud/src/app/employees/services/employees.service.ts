import { catchError } from "rxjs/operators";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Employee } from "../../models/employee.model";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  private listEmployees: Employee[];
  private employeesURI = "http://localhost:3000/employees";

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log("Client side error", errorResponse.error.message);
    } else {
      console.error("Server side error", errorResponse);
    }

    return throwError("Some ting wong. Please try again later");
  }

  getEmployees(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(this.employeesURI)
      .pipe(catchError(this.handleError));
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

  save(employee: Employee): Observable<Employee> {
    if (employee.id === null) {
      return this.http
        .post<Employee>(this.employeesURI, employee, {
          headers: new HttpHeaders({
            "Content-Type": "application/json"
          })
        })
        .pipe(catchError(this.handleError));
    }
    // else update
    else {
      const foundIndex = this.listEmployees.findIndex(
        e => e.id === employee.id
      );
      this.listEmployees[foundIndex] = employee;
    }
  }
}
