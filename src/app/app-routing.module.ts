import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {CityComponent} from "./modules/city/city.component";
import {isAuthenticatedGuard} from "./core/guard/is-authenticated.guard";
import {isAdminGuard,} from "./core/guard/is-admin.guard";
import {homeGuard} from './core/guard/home.guard'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canMatch: [homeGuard]
    },
    {
        path: '',
        loadComponent: () => import("./modules/login/login.component").then(m => m.LoginComponent)
    },
    {
        path: 'create',
        loadComponent: () => import("./modules/create/create.component").then(m => m.CreateComponent),
        canActivate: [isAdminGuard]
    },
    {
        path: ':cityName',
        component: CityComponent,
        canActivate: [isAuthenticatedGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
