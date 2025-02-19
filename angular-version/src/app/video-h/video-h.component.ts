import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-h',
  templateUrl: './video-h.component.html',
  styleUrls: ['./video-h.component.css']
})
export class VideoHComponent {
  @Input() title: string = '';
  @Input() creator: string = '';
  @Input() views: string = '';
  @Input() age: string = '';
}
