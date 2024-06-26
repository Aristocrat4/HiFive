import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthTaskComponent } from './fourth-task.component';

describe('FourthTaskComponent', () => {
  let component: FourthTaskComponent;
  let fixture: ComponentFixture<FourthTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourthTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
