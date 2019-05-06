import { Employee } from "./../models/employee.model";
import { Department } from "./../models/department.model";
import { Component, OnInit, ViewChild } from "@angular/core";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { EmployeesService } from "./employees.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild("employeeForm") public createEmployeeForm: NgForm;

  departments: Department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "HR" },
    { id: 3, name: "IT" },
    { id: 4, name: "Payroll" },
    { id: 5, name: "Admin" }
  ];
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: "email",
    dateOfBirth: null,
    department: null,
    isActive: false,
    photoPath: null
  };
  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;

  constructor(
    private _employeesService: EmployeesService,
    private _router: Router
  ) {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: "theme-dark-blue",
        minDate: new Date(1900, 1, 1),
        dateInputFormat: "DD/MM/YYYY"
      }
    );
  }

  ngOnInit() {}

  togglePhotoPreview(): void {
    this.previewPhoto = !this.previewPhoto;
  }

  saveEmployee(): void {
    this._employeesService.save(this.employee);
    this._router.navigate(["list"]);
  }
}
