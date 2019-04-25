import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListEmployeesComponent } from "./employees/list-employees.component";
import { CreateEmployeeComponent } from "./employees/create-employee.component";
import { NavComponent } from './layout/nav/nav.component';

@NgModule({
  declarations: [AppComponent, ListEmployeesComponent, CreateEmployeeComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
