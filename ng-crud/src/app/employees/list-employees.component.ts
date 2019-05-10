import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Employee } from "../models/employee.model";
import { ResolvedEmployeeList } from "./resolved-employeelist.model";

@Component({
  selector: "app-list-employees",
  templateUrl: "./list-employees.component.html",
  styleUrls: ["./list-employees.component.css"]
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  private _searchTerm: string;
  filteredEmployees: Employee[];
  error: string;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  constructor(private _router: Router, private _route: ActivatedRoute) {
    const resolvedData:
      | Employee[]
      | string = (this.employees = this._route.snapshot.data["employeeList"]);
    if (Array.isArray(resolvedData)) {
      this.employees = resolvedData;
    } else {
      this.error = resolvedData;
    }
    if (this._route.snapshot.queryParamMap.has("searchTerm")) {
      this.searchTerm = this._route.snapshot.queryParamMap.get("searchTerm");
    } else {
      this.filteredEmployees = this.employees;
    }
  }

  ngOnInit() {}

  filterEmployees(searchString: string) {
    return this.employees.filter(
      employee =>
        employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
  }

  onDeleteNotification(id: number) {
    const foundEmployee = this.filteredEmployees.findIndex(e => e.id === id);
    if (foundEmployee !== -1) {
      this.filteredEmployees.splice(foundEmployee, 1);
    }
  }
}
