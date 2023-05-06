import { Routes } from '@angular/router';
import { HomeComponent } from "./modules/home/home.component";
import { CityComponent } from "./modules/city/city.component";
import { IsAuthenticatedGuard } from "./core/guard/is-authenticated.guard";
import { IsAdminGuard } from "./core/guard/is-admin.guard";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [IsAuthenticatedGuard]
    },
    {
        path: 'login',
        loadComponent: () => import("./modules/login/login.component").then(c => c.LoginComponent)
    },
    {
        path: 'create',
        loadComponent: () => import("./modules/create/create.component").then(c => c.CreateComponent),
        canActivate: [IsAdminGuard]
    },
    {
        path: ':cityName',
        component: CityComponent,
        canActivate: [IsAuthenticatedGuard]
    },
];
