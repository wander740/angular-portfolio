import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortifolioRoutingModule } from './portifolio-routing.module';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    BannerComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PortifolioRoutingModule
  ]
})
export class PortifolioModule { }
