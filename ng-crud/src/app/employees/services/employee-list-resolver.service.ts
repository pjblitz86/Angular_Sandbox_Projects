import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Employee } from "../../models/employee.model";
import { Observable } from "rxjs";
import { EmployeesService } from "./employees.service";

@Injectable()
export class EmployeeListResolverService implements Resolve<Employee[]> {
  constructor(private _employeeService: EmployeesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Employee[]> {
    return this._employeeService.getEmployees();
  }
}
