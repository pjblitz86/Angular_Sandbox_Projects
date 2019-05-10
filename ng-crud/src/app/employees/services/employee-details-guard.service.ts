import { map, catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Router, CanActivate } from "@angular/router";
import { EmployeesService } from "./employees.service";

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class EmployeeDetailsGuardService implements CanActivate {
  constructor(
    private _employeeService: EmployeesService,
    private _router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this._employeeService.getEmployee(+route.paramMap.get("id")).pipe(
      map(employee => {
        const employeeExists = !!employee;
        if (employeeExists) {
          return true;
        } else {
          this._router.navigate(["notfound"]);
          return false;
        }
      }),
      catchError(err => {
        console.log(err);
        return of(false);
      })
    );
  }
}
