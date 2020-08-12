import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './modules/login/login/login.component';
import { RegisterComponent } from './modules/login/register/register.component';
import { AuthGuard } from './modules/login/guards/auth.guard';
import { AccessGuard } from './modules/login/guards/access.guard';


const routes: Routes = [
  { path: '', component: DefaultComponent,  },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
