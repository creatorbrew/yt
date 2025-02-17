import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicsComponent } from './topics.component';

describe('TopicsComponent', () => {
  let component: TopicsComponent;
  let fixture: ComponentFixture<TopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Because TopicsComponent is standalone and imports CommonModule internally,
      // we only need to include TopicsComponent here.
      imports: [TopicsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
