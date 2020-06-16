import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';


const routes: Routes = [
  {
    path: '', component: DefaultComponent, children: [
      { path: '', loadChildren: () => import('../../modules/main/main.module').then(m => m.MainModule) }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
