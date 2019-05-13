import { Employee } from "./../models/employee.model";
import { Department } from "./../models/department.model";
import { Component, OnInit, ViewChild } from "@angular/core";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { EmployeesService } from "./services/employees.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild("employeeForm") public createEmployeeForm: NgForm;

  cardTitle: string;
  departments: Department[] = [
    { id: "1", name: "Help Desk" },
    { id: "2", name: "HR" },
    { id: "3", name: "IT" },
    { id: "4", name: "Payroll" },
    { id: "5", name: "Admin" }
  ];
  employee: Employee;
  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;

  constructor(
    private _employeesService: EmployeesService,
    private _router: Router,
    private _route: ActivatedRoute
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

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get("id");
      this.getEmployee(id);
    });
  }

  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
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
      this.cardTitle = "Create Employee";
    } else {
      // object.assign to not auto-update data without pressing save
      this.cardTitle = "Edit Employee";
      this._employeesService
        .getEmployee(id)
        .subscribe(
          employee => (this.employee = employee),
          (err: any) => console.log(err)
        );
    }
  }

  togglePhotoPreview(): void {
    this.previewPhoto = !this.previewPhoto;
  }

  saveEmployee(): void {
    if (this.employee.id === null) {
      this._employeesService.save(this.employee).subscribe(
        (data: Employee) => {
          console.log(data);
          this.createEmployeeForm.reset();
          this._router.navigate(["list"]);
        },
        (error: any) => console.log(error)
      );
    } else {
      this._employeesService.update(this.employee).subscribe(
        () => {
          this.createEmployeeForm.reset();
          this._router.navigate(["list"]);
        },
        (error: any) => console.log(error)
      );
    }
  }
}
