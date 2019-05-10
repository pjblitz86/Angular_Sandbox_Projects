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

  getEmployee(id: number): Observable<Employee> {
    return this.http
      .get<Employee>(`${this.employeesURI}/${id}`)
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.employeesURI}/${id}`)
      .pipe(catchError(this.handleError));
  }

  save(employee: Employee): Observable<Employee> {
    return this.http
      .post<Employee>(this.employeesURI, employee, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      })
      .pipe(catchError(this.handleError));
  }

  update(employee: Employee): Observable<void> {
    return this.http
      .put<void>(`${this.employeesURI}/${employee.id}`, employee, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      })
      .pipe(catchError(this.handleError));
  }
}
