import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortifolioRoutingModule } from './portifolio-routing.module';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    PortifolioRoutingModule
  ]
})
export class PortifolioModule { }
