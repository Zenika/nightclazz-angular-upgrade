import {NgModule} from "@angular/core";
import {CreateComponent} from "./create.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

const CREATE_ROUTE = [
    {path: '', component: CreateComponent}
];

@NgModule({
    declarations: [
        CreateComponent
    ],
    imports: [
        RouterModule.forChild(CREATE_ROUTE),
        CommonModule,
        ReactiveFormsModule
    ]
})
export class CreateModule {

}
