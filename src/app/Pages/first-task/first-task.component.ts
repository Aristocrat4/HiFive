import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { JobService } from '../../services/job.service';

export interface Company {
  companyName: string;
  companyWebsite: string;
  companyDescription: string;
  positions: Position[];
}
export interface Position {
  positionName: string;
  positionLevel?: 'Junior' | 'Middle' | 'Senior';
  positionDescription: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-first-task',
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatProgressBarModule, MatCardModule],
  templateUrl: './first-task.component.html',
  styleUrl: './first-task.component.scss',
})
export class FirstTaskComponent {
  companyData: Company = {
    companyName: 'Company',
    companyWebsite: 'www.site.com',
    companyDescription: 'Description here',
    positions: [
      {
        positionName: 'Manager',
        positionLevel: 'Junior',
        positionDescription: 'Magari Pozicia',
        startDate: '1 July',
        endDate: '30 July',
      },
    ],
  };
  companies = this.jobService.jobs;

  constructor(private route: Router, private jobService: JobService) {}

  onAddJob() {
    this.jobService.jobForm.reset();
    this.route.navigate([`add-job`]);
  }
  onAddPosition(index: number) {
    this.route.navigate([`add-position/${index}`]);
  }
  onRemoveJob(index: number) {
    this.jobService.jobs.splice(index, 1);
  }
  onRemovePosition(i: number, j: number) {
    this.jobService.jobs.forEach((job, index) => {
      if (index === i) {
        job.positions.splice(j, 1);
      }
    });
  }
}
