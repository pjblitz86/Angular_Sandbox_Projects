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
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const employeeExists = !!this._employeeService.getEmployee(
      +route.paramMap.get("id")
    );

    if (employeeExists) {
      return true;
    } else {
      this._router.navigate(["notfound"]);
      return false;
    }
  }
}