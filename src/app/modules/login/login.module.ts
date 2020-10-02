import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { RouterModule } from "@angular/router";


const LOGIN_ROUTE = [
    {path: '', component: LoginComponent}
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(LOGIN_ROUTE),
        ReactiveFormsModule
    ]
})
export class LoginModule {
}
