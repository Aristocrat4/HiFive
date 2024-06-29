import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionLevelSelectorComponent } from './position-level-selector.component';

describe('PositionLevelSelectorComponent', () => {
  let component: PositionLevelSelectorComponent;
  let fixture: ComponentFixture<PositionLevelSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionLevelSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PositionLevelSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
