import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent {
  @Input() label: string = '';
  @Input() selected: boolean = false;
  @Output() select: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    this.select.emit(this.label);
  }
}
