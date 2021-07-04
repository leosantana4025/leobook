import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGamesComponent } from './lista-games.component';

describe('ListaGamesComponent', () => {
  let component: ListaGamesComponent;
  let fixture: ComponentFixture<ListaGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
