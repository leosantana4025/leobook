import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCapasGamesComponent } from './grade-capas-games.component';

describe('GradeCapasGamesComponent', () => {
  let component: GradeCapasGamesComponent;
  let fixture: ComponentFixture<GradeCapasGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeCapasGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeCapasGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
