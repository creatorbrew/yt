import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, NavComponent, ButtonsComponent, ContentComponent]
})
export class AppComponent {
  title = 'my-angular-app';
}
