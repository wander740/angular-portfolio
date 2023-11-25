import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', 'header.responsive,component.css']
})
export class HeaderComponent {
  @Output() about = new EventEmitter(false);
  @Output() experience = new EventEmitter(false);
  @Output() projects = new EventEmitter(false);
  @Output() skills = new EventEmitter(false);
  @Output() contact = new EventEmitter(false);

  display: string = 'none';

  onAbout(){
    this.about.emit(true);
  }

  onExperience(){
    this.experience.emit(true);
  }

  onProjects(){
    this.projects.emit(true);
  }

  onHabilidades(){
    this.skills.emit(true);
  }

  onContato(){
    this.contact.emit(true);
  }

  clickMenu(){
    this.display = this.display == 'block' ? 'none' : 'block';
  }

  resizeDisplay(){
    if(window.innerWidth >= 600){
      this.display = 'none';
    }
  }
}
