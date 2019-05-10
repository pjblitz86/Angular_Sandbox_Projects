import { EmployeesService } from "./services/employees.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Employee } from "../models/employee.model";

@Component({
  selector: "app-display-employee",
  templateUrl: "./display-employee.component.html",
  styleUrls: ["./display-employee.component.css"]
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() searchTerm: string;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  selectedEmployeeId: number;
  confirmDelete = false;
  cardExpanded = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _employeesService: EmployeesService
  ) {}

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get("id");
  }

  getEmployeeAndGender(): string {
    return this.employee.name + ", " + this.employee.gender;
  }

  viewEmployee() {
    this._router.navigate(["/employees", this.employee.id], {
      queryParams: { searchTerm: this.searchTerm }
    });
  }

  editEmployee() {
    this._router.navigate(["/edit", this.employee.id]);
  }

  deleteEmployee() {
    this._employeesService
      .delete(this.employee.id)
      .subscribe(
        () => console.log(`Employee with id=${this.employee.id} deleted`),
        err => console.log(err)
      );
    this.notifyDelete.emit(this.employee.id);
  }
}
