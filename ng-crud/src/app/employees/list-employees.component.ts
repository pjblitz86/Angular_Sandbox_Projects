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
  private _searchTerm: string;
  filteredEmployees: Employee[];

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  constructor(
    private _employeesService: EmployeesService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.employees = this._employeesService.getEmployees();
    this.filteredEmployees = this.employees;
  }

  onDblClick(employeeId: number) {
    this._router.navigate(["/employees", employeeId]);
  }

  filterEmployees(searchString: string) {
    return this.employees.filter(
      employee =>
        employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
  }
}
