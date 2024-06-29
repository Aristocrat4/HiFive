import { Component, model } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import {
  MatCalendarCellClassFunction,
  MatCalendarCellCssClasses,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-fourth-task',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './fourth-task.component.html',
  styleUrl: './fourth-task.component.scss',
})
export class FourthTaskComponent {
  selected = model<Date | null>(null);

  dateClass = (date: Date): MatCalendarCellCssClasses => {
    const day = date.getDate();

    // Example: Color Sundays red and Saturdays blue
    if (date.getDay() === 0) return 'sunday-class';
    if (date.getDay() === 6) return 'saturday-class';

    // Example: Color specific dates
    if (day === 12) return 'special-date-class';

    return '';
  };
}
