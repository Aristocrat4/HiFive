import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DateFormatPipe } from '../../date-format.pipe';

@Component({
  selector: 'app-third-task',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    DateFormatPipe,
  ],
  templateUrl: './third-task.component.html',
  styleUrl: './third-task.component.scss',
})
export class ThirdTaskComponent {
  text!: '';
}
