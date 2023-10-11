import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  cover: string = '';
  @Input()
  title: string = '';
  @Input()
  text: string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore delectus nesciunt maiores, quo quisquam officiis tenetur doloremque fugit, necessitatibus harum reiciendis error aliquam, iure assumenda? Cumque sit deserunt iusto maxime!]';

  @Output() card = new EventEmitter(false);

  onCard(){
    this.card.emit(true);
  }
}
