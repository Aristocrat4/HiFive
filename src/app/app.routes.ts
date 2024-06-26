import { Routes } from '@angular/router';
import { FirstTaskComponent } from './Pages/first-task/first-task.component';
import { SecondTaskComponent } from './Pages/second-task/second-task.component';
import { ThirdTaskComponent } from './Pages/third-task/third-task.component';
import { FourthTaskComponent } from './Pages/fourth-task/fourth-task.component';
import { FifthTaskComponent } from './Pages/fifth-task/fifth-task.component';

export const routes: Routes = [
  { path: '', component: FirstTaskComponent },
  { path: 'first', component: FirstTaskComponent },
  { path: 'second', component: SecondTaskComponent },
  { path: 'third', component: ThirdTaskComponent },
  { path: 'fourth', component: FourthTaskComponent },
  { path: 'fifth', component: FifthTaskComponent },
];
