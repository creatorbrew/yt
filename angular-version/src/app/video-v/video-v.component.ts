import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-v',
  standalone: true,
  templateUrl: './video-v.component.html',
  styleUrls: ['./video-v.component.css']
})
export class VideoVComponent {
  @Input() title: string = '';
  @Input() creator: string = '';
  @Input() views: string = '';
  @Input() age: string = '';
}
