import {Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {CityComponent} from "./modules/city/city.component";
import {isAuthenticatedGuard} from "./core/guard/is-authenticated.guard";
import {isAdminGuard,} from "./core/guard/is-admin.guard";
import {homeGuard} from './core/guard/home.guard'

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canMatch: [homeGuard]
    },
    {
        path: '',
        loadComponent: () => import("./modules/login/login.component")
    },
    {
        path: 'create',
        loadComponent: () => import("./modules/create/create.component"),
        canActivate: [isAdminGuard]
    },
    {
        path: 'city/:cityName',
        component: CityComponent,
        canActivate: [isAuthenticatedGuard]
    },
];
