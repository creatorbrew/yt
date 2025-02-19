import { Component } from '@angular/core';
import { NavButtonComponent } from '../nav-button/nav-button.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: true,
  imports: [NavButtonComponent]
})
export class NavComponent {
  selectedNav: string = 'Home';

  onSelect(label: string): void {
    this.selectedNav = label;
  }
}
