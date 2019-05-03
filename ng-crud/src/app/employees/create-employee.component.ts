import { Employee } from "./../models/employee.model";
import { Department } from "./../models/department.model";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
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

  constructor() {
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

  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }
}
