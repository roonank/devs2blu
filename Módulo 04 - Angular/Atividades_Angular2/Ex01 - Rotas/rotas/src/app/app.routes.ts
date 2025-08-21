import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {path:'home', component:Home},
    {path:'about', component:About},
    {path:'contact', component:Contact},
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'**', component:NotFound}
];
