import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoVComponent } from './video-v.component';

describe('VideoVComponent', () => {
  let component: VideoVComponent;
  let fixture: ComponentFixture<VideoVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
