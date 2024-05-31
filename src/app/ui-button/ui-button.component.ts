import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  standalone: true,
  imports: [],
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.scss',
})
export class UiButtonComponent {
  @Output() onClick = new EventEmitter<void>();
  @Input() isLoading!: boolean;

  handleOnClick() {
    this.onClick.emit();
  }
}
