import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./modules/home/home.component";
import { CityComponent } from "./modules/city/city.component";
import { IsAuthenticatedGuard } from "./core/guard/is-authenticated.guard";
import { IsAdminGuard } from "./core/guard/is-admin.guard";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [IsAuthenticatedGuard]
    },
    {
        path: 'login',
        loadChildren: () => import("./modules/login/login.module").then(m => m.LoginModule)
    },
    {
        path: 'create',
        loadChildren: () => import("./modules/create/create.module").then(m => m.CreateModule),
        canActivate: [IsAdminGuard]
    },
    {
        path: ':cityName',
        component: CityComponent,
        canActivate: [IsAuthenticatedGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
