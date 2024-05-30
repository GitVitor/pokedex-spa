import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-filter.component.html',
  styleUrl: './input-filter.component.scss',
})
export class InputFilterComponent {
  @Output() searchValueChanged: EventEmitter<string> =
    new EventEmitter<string>();

  form = new FormGroup({
    query: new FormControl(''),
  });

  ngOnInit() {
    this.form
      .get('query')
      ?.valueChanges.subscribe((newValue: string | null) => {
        this.searchValueChanged.emit(newValue ?? '');
      });
  }
}
