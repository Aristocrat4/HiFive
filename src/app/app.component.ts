import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private route: Router) {}
  title = 'HiFive';
  onFirst() {
    this.route.navigate([`first`]);
  }
  onSecond() {
    this.route.navigate([`second`]);
  }
  onThird() {
    this.route.navigate([`third`]);
  }
  onFourth() {
    this.route.navigate([`fourth`]);
  }
  onFifth() {
    this.route.navigate([`fifth`]);
  }
}
