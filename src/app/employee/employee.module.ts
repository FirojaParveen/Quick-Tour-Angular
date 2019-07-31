import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { employeeRouting } from './employee.routing';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddEditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    employeeRouting,
    HttpClientModule
  ]
})
export class EmployeeModule { }
