import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { EmployeesService } from "./employees.service";
import { Employee } from "../models/employee.model";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"]
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;

  constructor(
    private _route: ActivatedRoute,
    private _employeeService: EmployeesService
  ) {}

  ngOnInit() {
    const id = +this._route.snapshot.params["id"];
    this.employee = this._employeeService.getEmployee(id);
  }
}
