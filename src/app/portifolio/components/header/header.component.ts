import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() about = new EventEmitter(false);
  @Output() experience = new EventEmitter(false);
  @Output() projects = new EventEmitter(false);

  onAbout(){
    this.about.emit(true);
  }

  onExperience(){
    this.experience.emit(true);
  }

  onProjects(){
    this.projects.emit(true);
  }
}
