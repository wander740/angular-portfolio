import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  scroll(target :HTMLElement){
    console.log(target);
    target.scrollIntoView({behavior: 'smooth'});
  }

  clickCard(proj: string){
    switch(proj){
      case '1':
        window.open('https://post-angular-e5718.web.app/news', "_blank");
        break;
      case '2':
        window.open('https://passo-leve.web.app/sneaker', "_blank");
        break;
    }
  }
}
