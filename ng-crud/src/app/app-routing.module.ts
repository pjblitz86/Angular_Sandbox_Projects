import { CreateEmployeeCanDeactivateGuardService } from "./employees/create-employee-can-deactivate-guard.service";
import { CreateEmployeeComponent } from "./employees/create-employee.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListEmployeesComponent } from "./employees/list-employees.component";
import { EmployeeDetailsComponent } from "./employees/employee-details.component";
import { EmployeeListResolverService } from "./employees/employee-list-resolver.service";

const routes: Routes = [
  {
    path: "list",
    component: ListEmployeesComponent,
    resolve: { employeeList: EmployeeListResolverService }
  },
  { path: "employees/:id", component: EmployeeDetailsComponent },
  {
    path: "create",
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },
  { path: "", redirectTo: "/list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
