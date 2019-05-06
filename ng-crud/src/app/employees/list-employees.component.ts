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
  dataFromChild: string;

  constructor(private _employeesService: EmployeesService) {}

  ngOnInit() {
    this.employees = this._employeesService.getEmployees();
  }

  handleNotify(eventData: string) {
    this.dataFromChild = eventData;
  }
}
