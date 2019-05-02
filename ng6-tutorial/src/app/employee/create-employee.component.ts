import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // 2ways to build reactive form: with FormGroup/FormControl or with FormBuilder (less code)
    this.employeeForm = this.fb.group({
      fullName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      skills: this.fb.group({
        skillName: [""],
        experienceInYears: [""],
        proficiency: ["beginner"]
      })
    });
  }
  get f() {
    return this.employeeForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.employeeForm.invalid) {
      return;
    }
    console.log(this.employeeForm.value);
  }

  onLoadDataClick(): void {
    this.employeeForm.setValue({
      fullName: "Paulius",
      email: "paulius@gmail.com",
      skills: {
        skillName: "C#",
        experienceInYears: 5,
        proficiency: "beginner"
      }
    });
  }
}
