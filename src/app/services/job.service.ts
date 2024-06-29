import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Company } from '../Pages/first-task/first-task.component';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  jobs: Company[] = [];
  jobForm: FormGroup = this.fb.group({
    companyName: '',
    companyDescription: '',
    companyWebsite: '',
    positions: [],
  });
  constructor(private fb: FormBuilder) {}

  addJob(job: Company) {
    this.jobs.push(job);
    console.log(this.jobs);
  }
}
