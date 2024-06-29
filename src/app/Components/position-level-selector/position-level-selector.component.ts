import { CommonModule } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-position-level-selector',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PositionLevelSelectorComponent),
      multi: true,
    },
  ],
  templateUrl: './position-level-selector.component.html',
  styleUrl: './position-level-selector.component.scss',
})
export class PositionLevelSelectorComponent implements ControlValueAccessor {
  levels: string[] = ['Junior', 'Middle', 'Senior'];
  value!: string;
  disabled: boolean = false;

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  selectLevel(level: string): void {
    this.value = level;
    this.onChange(this.value);
    this.onTouch();
  }
}
