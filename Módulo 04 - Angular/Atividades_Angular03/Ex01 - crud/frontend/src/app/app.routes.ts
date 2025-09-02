import { Routes } from '@angular/router';
import { Principal } from './layout/principal/principal';

export const routes: Routes = [
    {path:'principal', component:Principal},
    {path:'', redirectTo:'principal', pathMatch:'full'},
];
