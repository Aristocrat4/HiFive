import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JobService } from '../../services/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PositionLevelSelectorComponent } from '../../Components/position-level-selector/position-level-selector.component';

@Component({
  selector: 'app-add-job',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    PositionLevelSelectorComponent,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-position.component.html',
  styleUrl: './add-position.component.scss',
})
export class AddPositionComponent {
  positionForm = this.jobService.positionForm;
  paramsId = '';

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => (this.paramsId = params['id']));
  }

  onSave() {
    this.jobService.addPosition(+this.paramsId, this.positionForm.value);
    this.jobService.positionForm.reset();
    this.router.navigate(['/first']);
  }
  onCancel() {
    this.jobService.positionForm.reset();
    this.router.navigate(['/first']);
  }
}
