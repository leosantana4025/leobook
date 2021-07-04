import { ListaGamesResolver } from './lista-games/lista-games.resolver';
import { DetalheGameComponent } from './detalhe-game/detalhe-game.component';
import { ListaGamesComponent } from './lista-games/lista-games.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListaGamesComponent,
    resolve: {
      games: ListaGamesResolver
    }
  },
  {
    path: ':gameID',
    component: DetalheGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GamesRoutingModule { }
