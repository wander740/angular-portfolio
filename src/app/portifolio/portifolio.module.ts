import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortifolioRoutingModule } from './portifolio-routing.module';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardComponent } from './components/card/card.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { CdnPipe } from './pipes/cdn.pipe';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    BannerComponent,
    CardComponent,
    AboutComponent,
    FooterComponent,
    CdnPipe
  ],
  imports: [
    CommonModule,
    PortifolioRoutingModule
  ]
})
export class PortifolioModule { }
