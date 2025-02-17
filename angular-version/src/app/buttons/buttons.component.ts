import { Component } from '@angular/core';
import { TopicsComponent } from '../topics/topics.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  standalone: true,
  imports: [TopicsComponent] 
})
export class ButtonsComponent {
  topics: string[] = [
    'All',
    'Airbus A380',
    'Airplanes',
    'Gaming',
    'Music',
    'Scale models',
    'Stop Motion',
    'Preschools',
    'Lives',
    'Grand Theft Auto online',
    'Rolling Stock',
    'Simulaitons',
    'Home Improvement'
  ];
  selectedTopic = 'All';

  selectTopic(topic: string) {
    this.selectedTopic = topic;
  }
}
