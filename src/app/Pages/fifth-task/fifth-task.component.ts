import { Component } from '@angular/core';
import { StringMatchComponent } from '../../Components/string-match/string-match.component';

@Component({
  selector: 'app-fifth-task',
  standalone: true,
  imports: [StringMatchComponent],
  templateUrl: './fifth-task.component.html',
  styleUrl: './fifth-task.component.scss',
})
export class FifthTaskComponent {
  searchTerm = 'ქონება';
  searchArray = [
    'ქონება',
    'ქონების პრივატიზება',
    'ქონების გასხვისება',
    'საქონლის გასხვისება',
  ];
}
