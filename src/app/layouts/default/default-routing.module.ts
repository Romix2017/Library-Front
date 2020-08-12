import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { AccessGuard } from '../../modules/login/guards/access.guard';


const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    canActivate: [AccessGuard], canLoad: [AccessGuard],
    children: [
      { path: '', loadChildren: () => import('../../modules/main/main.module').then(m => m.MainModule) }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
