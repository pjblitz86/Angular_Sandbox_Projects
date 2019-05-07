import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { Employee } from "../models/employee.model";

@Component({
  selector: "app-display-employee",
  templateUrl: "./display-employee.component.html",
  styleUrls: ["./display-employee.component.css"]
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  selectedEmployeeId: number;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get("id");
  }

  getEmployeeAndGender(): string {
    return this.employee.name + ", " + this.employee.gender;
  }
}
