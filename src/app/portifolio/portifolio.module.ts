import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortifolioRoutingModule } from './portifolio-routing.module';
import { HomePageComponent } from './containers/home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    PortifolioRoutingModule
  ]
})
export class PortifolioModule { }
