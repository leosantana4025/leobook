import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheGameComponent } from './detalhe-game.component';

describe('DetalheGameComponent', () => {
  let component: DetalheGameComponent;
  let fixture: ComponentFixture<DetalheGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
