import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./modules/home/home.component";
import { CityComponent } from "./modules/city/city.component";
import { IsAuthenticatedGuard } from "./core/guard/is-authenticated.guard";
import { IsAdminGuard } from "./core/guard/is-admin.guard";
import { HomeGuard } from './core/guard/home.guard'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canMatch: [HomeGuard]
    },
    {
        path: '',
        loadComponent: () => import("./modules/login/login.component").then(m => m.LoginComponent)
    },
    {
        path: 'create',
        loadComponent: () => import("./modules/create/create.component").then(m => m.CreateComponent),
        canActivate: [IsAdminGuard]
    },
    {
        path: ':cityName',
        component: CityComponent,
        canActivate: [IsAuthenticatedGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
