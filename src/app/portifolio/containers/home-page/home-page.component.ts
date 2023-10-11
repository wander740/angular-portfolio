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

  clickCard(){
    window.location.href = 'https://post-angular-e5718.web.app/news';
  }
}
