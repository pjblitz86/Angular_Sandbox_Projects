import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { EmployeesService } from "./services/employees.service";
import { Employee } from "../models/employee.model";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"]
})
export class EmployeeDetailsComponent implements OnInit {
  private _id: number;
  employee: Employee;
  employees: Employee[];

  constructor(
    private _route: ActivatedRoute,
    private _employeesService: EmployeesService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this._id = +params.get("id");
      this._employeesService
        .getEmployee(this._id)
        .subscribe(
          employee => (this.employee = employee),
          (err: any) => console.log(err)
        );
    });
    this._employeesService
      .getEmployees()
      .subscribe(employees => (this.employees = employees));
  }

  viewNextEmployee() {
    if (this._id < this.employees.length) {
      this._id++;
    } else {
      this._id = 1;
    }
    this._router.navigate(["/employees", this._id], {
      queryParamsHandling: "preserve"
    });
  }
}
