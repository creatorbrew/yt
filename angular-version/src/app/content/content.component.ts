import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoHComponent } from '../video-h/video-h.component';
import { VideoVComponent } from '../video-v/video-v.component'; // make sure this path is correct



interface Video {
  title: string;
  creator: string;
  views: string;
  age: string;
}

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, VideoHComponent, VideoVComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  videoCards: Video[] = [
    { title: 'First Video Title', creator: 'Creator Name', views: '123K', age: '1 day ago' },
    { title: 'Second Video Title', creator: 'Creator Name', views: '456K', age: '20 days ago' },
    { title: 'Third Video Title', creator: 'Creator Name', views: '789K', age: '1 month ago' },
    { title: 'Forth Video Title', creator: 'Creator Name', views: '1M', age: '1 month ago' },
    { title: 'Fith Video Title', creator: 'Creator Name', views: '1M', age: '2 months ago' }
  ];

  //make disappear earlier ahead of browser width shrinking
  h_videoOffset = 100;
  v_videoOffset = 40;


  visibleVideoCards: Video[] = [];
  cardWidth = 330 + 15 + this.h_videoOffset;

  verticalVideos: Video[] = [
    { title: 'Vertical Video 1', creator: 'Creator Name', views: '123K', age: '1 day ago' },
    { title: 'Vertical Video 2', creator: 'Creator Name', views: '456K', age: '20 days ago' },
    { title: 'Vertical Video 3', creator: 'Creator Name', views: '789K', age: '1 month ago' },
    { title: 'Vertical Video 4', creator: 'Creator Name', views: '1M', age: '1 month ago' },
    { title: 'Vertical Video 5', creator: 'Creator Name', views: '1M', age: '2 months ago' },
    { title: 'Vertical Video 6', creator: 'Creator Name', views: '111K', age: '3 days ago' },
    { title: 'Vertical Video 7', creator: 'Creator Name', views: '222K', age: '2 weeks ago' },
    { title: 'Vertical Video 8', creator: 'Creator Name', views: '333K', age: '1 month ago' },
    { title: 'Vertical Video 9', creator: 'Creator Name', views: '444K', age: '3 months ago' },
    { title: 'Vertical Video 10', creator: 'Creator Name', views: '555K', age: '4 months ago' }
  ];

  visibleVerticalVideoCards: Video[] = [];
  cardWidthV = 200 + 15+this.v_videoOffset;

  constructor() {}


  ngOnInit(): void {
    this.updateVisibleCards();
    this.updateVisibleVerticalCards();
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.updateVisibleCards();
    this.updateVisibleVerticalCards();
  }

  updateVisibleCards(): void {
    const container = document.querySelector('.video-row') as HTMLElement;
    if (container) {
      const containerWidth = container.clientWidth;
      let count = Math.floor(containerWidth / this.cardWidth);
  
      // For small screens, show only 1 card.
      if (window.innerWidth <= 768) {
        count = 1;
      }
      // For screen widths up to 1300px, cap the number of cards to 2.
      else if (window.innerWidth <= 1300) {
        count = Math.min(count, 2);
      }
  
      this.visibleVideoCards = this.videoCards.slice(0, count);
    }
  }

  updateVisibleVerticalCards(): void {
    const container = document.querySelector('.video-row.vertical') as HTMLElement;
    if (container) {
      const containerWidth = container.clientWidth;
      let count = Math.floor(containerWidth / this.cardWidthV);

      // For small screens show only 1 vertical card.
      if (window.innerWidth <= 768) {
        count = 1;
      }

      this.visibleVerticalVideoCards = this.verticalVideos.slice(0, count);
    }
  }
}
