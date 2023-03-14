import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab4RoutingModule } from './tab4-routing.module';
import { Tab4Component } from './tab4.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';


@NgModule({
  declarations: [Tab4Component,Child1Component,Child2Component],
  imports: [
    CommonModule,
    Tab4RoutingModule,
    IonicModule,
    FormsModule,
    ExploreContainerComponentModule,
  ]
})
export class Tab4Module { }
