import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';

const employeeRoutes: Routes = [
    {
         path: '',
         component: EmployeeComponent,
        children: [
            { path: '', component: AddEditEmployeeComponent, pathMatch: 'full' }
        ]
    }
];

export const employeeRouting: ModuleWithProviders = RouterModule.forChild(employeeRoutes);
