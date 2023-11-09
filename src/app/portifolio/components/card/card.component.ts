import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './card.responsive.component.css']
})
export class CardComponent {
  @Input()
  cover: string = '';
  @Input()
  title: string = '';
  @Input()
  text: string = '';

  @Output() card = new EventEmitter(false);

  onCard(){
    this.card.emit(true);
  }
}
