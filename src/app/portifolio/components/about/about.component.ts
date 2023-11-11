import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', 'about.responsive.component.css']
})
export class AboutComponent {
  @Input()
  text: string = '';
  @Input()
  title: string = '';
  @Input()
  cover: string = '';
}
