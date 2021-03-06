import { HttpClientModule } from "@angular/common/http";
import { EmployeeDetailsGuardService } from "./employees/services/employee-details-guard.service";
import { EmployeeListResolverService } from "./employees/services/employee-list-resolver.service";
import { CreateEmployeeCanDeactivateGuardService } from "./employees/services/create-employee-can-deactivate-guard.service";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListEmployeesComponent } from "./employees/list-employees.component";
import { CreateEmployeeComponent } from "./employees/create-employee.component";
import { NavComponent } from "./layout/nav/nav.component";
import { EmployeesService } from "./employees/services/employees.service";
import { DisplayEmployeeComponent } from "./employees/display-employee.component";
import { EmployeeDetailsComponent } from "./employees/employee-details.component";
import { PageNotFoundComponent } from "./page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    NavComponent,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    EmployeesService,
    CreateEmployeeCanDeactivateGuardService,
    EmployeeListResolverService,
    EmployeeDetailsGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
