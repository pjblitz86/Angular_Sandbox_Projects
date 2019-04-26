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
  fullName: string;
  email: string;
  gender = "male";
  phoneNumber: number;
  contactPreference: string;
  isActive = true;
  department = "3";
  dateOfBirth;
  departments: Department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "HR" },
    { id: 3, name: "IT" },
    { id: 4, name: "Payroll" },
    { id: 5, name: "Admin" }
  ];
  datePickerConfig: Partial<BsDatepickerConfig>;

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

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }
}
