import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Company, Position } from '../Pages/first-task/first-task.component';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  jobs: Company[] = [];
  jobForm: FormGroup = this.fb.group({
    companyName: '',
    companyDescription: '',
    companyWebsite: '',
    positions: this.fb.array([]),
  });
  positionForm: FormGroup = this.fb.group({
    positionName: '',
    positionDescription: '',
    startDate: '',
    endDate: '',
    positionLevel: '',
  });
  constructor(private fb: FormBuilder) {}

  addJob(job: Company) {
    this.jobs.push(job);
  }
  addPosition(indexOfJob: number, position: Position) {
    this.jobs.forEach((job, i) => {
      if (i === indexOfJob) {
        job.positions.push(position);
      }
    });
  }
}
