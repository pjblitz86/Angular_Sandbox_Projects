import { CreateEmployeeCanDeactivateGuardService } from "./employees/create-employee-can-deactivate-guard.service";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListEmployeesComponent } from "./employees/list-employees.component";
import { CreateEmployeeComponent } from "./employees/create-employee.component";
import { NavComponent } from "./layout/nav/nav.component";
import { EmployeesService } from "./employees/employees.service";
import { DisplayEmployeeComponent } from "./employees/display-employee.component";
import { EmployeeDetailsComponent } from "./employees/employee-details.component";
import { EmployeeFilterPipe } from "./employees/employee-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    NavComponent,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [EmployeesService, CreateEmployeeCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
