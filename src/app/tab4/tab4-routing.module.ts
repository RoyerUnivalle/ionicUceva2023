import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Tab4Component } from './tab4.component';

const routes: Routes = [
  {
    path: '',
    component: Tab4Component,
    children:[
      {
        path: 'child1',
        component: Child1Component,
      },
      {
        path: 'child2',
        component: Child2Component,
      },
      {
        path: '',
        redirectTo: '/tabs/tab4/child1',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab4RoutingModule { }
