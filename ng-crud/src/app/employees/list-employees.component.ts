import { Router } from "@angular/router";
import { EmployeesService } from "./employees.service";
import { Component, OnInit } from "@angular/core";
import { Employee } from "../models/employee.model";

@Component({
  selector: "app-list-employees",
  templateUrl: "./list-employees.component.html",
  styleUrls: ["./list-employees.component.css"]
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  searchTerm: string;

  constructor(
    private _employeesService: EmployeesService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.employees = this._employeesService.getEmployees();
  }

  onDblClick(employeeId: number) {
    this._router.navigate(["/employees", employeeId]);
  }
}
