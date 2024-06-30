import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringMatchComponent } from './string-match.component';

describe('StringMatchComponent', () => {
  let component: StringMatchComponent;
  let fixture: ComponentFixture<StringMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringMatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StringMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
