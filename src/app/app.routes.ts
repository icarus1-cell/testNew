import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Actors } from './actors/actors';
import { Categories } from './categories/categories';
import { Directors } from './directors/directors';
import { History } from './history/history'; 
import { LoginComponent } from './login/login';
import { Notfound } from './notfound/notfound';
import { guardGuard } from './guard.guard';
import { RegisterComponent } from './register/register';
import { register } from 'module';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'directors', component: Directors,canActivate:[guardGuard] },
  { path: 'home', component: Home ,canActivate:[guardGuard]},
  { path: 'actors', component: Actors ,canActivate:[guardGuard]},
  { path: 'categories', component: Categories ,canActivate:[guardGuard] },
  { path: 'history', component: History ,canActivate:[guardGuard] },
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path:'**',component:Notfound},
  
];
