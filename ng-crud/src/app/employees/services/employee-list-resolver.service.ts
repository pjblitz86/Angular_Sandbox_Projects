import { Employee } from "./../../models/employee.model";
import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable, of } from "rxjs";
import { EmployeesService } from "./employees.service";
import { map, catchError } from "rxjs/operators";
import { ResolvedEmployeeList } from "../resolved-employeelist.model";

@Injectable()
export class EmployeeListResolverService
  implements Resolve<Employee[] | string> {
  constructor(private _employeeService: EmployeesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Employee[] | string> {
    // resolver will auto subscribe to observable
    return this._employeeService
      .getEmployees()
      .pipe(catchError((err: string) => of(err)));
  }
}
